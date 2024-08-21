import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { UserPaginationResponse } from "./dto/response/users-pagination.response";
import { UserResponse } from "./dto/response/user.response";
import { firstValueFrom } from "rxjs";
import { CreateUserRequest } from "./dto/request/create-user.request";
import { URLSearchParams } from "url";
import { UpdateUserRequest } from "./dto/request/update-user.request";

@Injectable()
export class UserIntegrationService {

  private readonly logger = new Logger(UserIntegrationService.name);

  private readonly BASE_URL = 'https://dummyjson.com';

  constructor(
    private readonly http: HttpService
  ) {}
  
  async buscarTodosUsuariosPaginado(numeroPagina?: number, porPagina: number = 30) {
    const url = new URL(`${this.BASE_URL}/users`);
    url.searchParams.append('limit', porPagina.toString());
    numeroPagina && url.searchParams.append('skip', numeroPagina.toString());

    this.logger.log(`Chamando servico User Paginado: ${url.toString()}`);

    const request = this.http.get<UserPaginationResponse>(url.toString());
    const { data } = await firstValueFrom(request);

    this.logger.log(`Response servico User paginado: ${JSON.stringify(data)}`);
    return data;
  }

  async existeUsuario(idUsuario: number) {
    const url = new URL(`${this.BASE_URL}/users/${idUsuario}`);

    this.logger.log(`Chamando servico para encontrar o usuário ${idUsuario}: ${url.toString()}`);

    const request = this.http.get<UserResponse>(url.toString());
    const { data } = await firstValueFrom(request);

    this.logger.log(`Existe usuario ${idUsuario}? : ${!!data}`);
    return !!data;
  }  

  async buscarUsuarioPorId(idUsuario: number) {
    const url = new URL(`${this.BASE_URL}/users/${idUsuario}`);

    this.logger.log(`Chamando servico para encontrar o usuário ${idUsuario}: ${url.toString()}`);

    const request = this.http.get<UserResponse>(url.toString());
    const { data } = await firstValueFrom(request);

    this.logger.log(`Response servico para encontrar o usuário ${idUsuario}: ${JSON.stringify(data)}`);
    return data;
  }
  
  async criarNovoUsuario(usuario: CreateUserRequest) {
    const url = new URL(`${this.BASE_URL}/users/add`);

    this.logger.log(`Chamando servico para criar novo usuário ${JSON.stringify(usuario)} : ${url.toString()}`);

    const request = this.http.post<UserResponse>(url.toString(), usuario);
    const { data } = await firstValueFrom(request);

    this.logger.log(`Response servico para criar novo usuário: ${JSON.stringify(data)}`);
    return data;
  }
  
  async atualizarUsuarioPorId(idUsuario: number, usuario: UpdateUserRequest) {
    const url = new URL(`${this.BASE_URL}/users/${idUsuario}`);

    this.logger.log(`Chamando servico para atualizar o usuário ${idUsuario}: ${url.toString()} - ${JSON.stringify(usuario)}`);

    const request = this.http.put<UserResponse>(url.toString(), usuario);
    const { data } = await firstValueFrom(request);

    this.logger.log(`Response servico para atualizar o usuário ${idUsuario}: ${JSON.stringify(data)}`);
    return data;
  }
  
  async deletarUsuarioPorId(idUsuario: number) {
    const url = new URL(`${this.BASE_URL}/users/${idUsuario}`);

    this.logger.log(`Chamando servico para DELETAR o usuário ${idUsuario}: ${url.toString()}`);

    const request = this.http.delete(url.toString());
    const { data } = await firstValueFrom(request);

    this.logger.log(`Response servico para DELETAR o usuário ${idUsuario}: ${JSON.stringify(data)}`);
    return data;
  }
}
