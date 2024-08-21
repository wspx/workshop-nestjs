import { Injectable } from "@nestjs/common";

import { AtualizarUsuarioRequest } from "src/controllers/dto/requests/atualizar-usuario.request";
import { CriarUsuarioRequest } from "src/controllers/dto/requests/criar-usuario.request";

import { UserIntegrationService } from "src/integration/dummyjson/user.integration.service";

import { UsuarioConverter } from "src/converters/usuario.converter";

@Injectable()
export class UsuarioService {

  constructor(
    private readonly userIntegrationService: UserIntegrationService
  ) {}

  async buscarUsuarioPaginada(numeroPagina?: number, porPagina?: number) {
    const usuarioPaginadoIntegration = await this.userIntegrationService.buscarTodosUsuariosPaginado(numeroPagina, porPagina);
    return UsuarioConverter.toUsuarioPaginado(usuarioPaginadoIntegration);
  }

  async buscarUsuarioPorId(idUsuario: number) {
    const usuarioPorIdIntegration = await this.userIntegrationService.buscarUsuarioPorId(idUsuario);
    return UsuarioConverter.toUsuarioResponse(usuarioPorIdIntegration);
  }

  async criarNovoUsuario(novoUsuario: CriarUsuarioRequest) {
    const usuarioRequest = UsuarioConverter.toNovoUsuarioRequest(novoUsuario);
    const novoUsuarioIntegration = await this.userIntegrationService.criarNovoUsuario(usuarioRequest);
    return UsuarioConverter.toUsuarioResponse(novoUsuarioIntegration);
  }

  async atualizarUsuarioPorId(idUsuario: number, usuarioAtualizado: AtualizarUsuarioRequest) {
    const atualizarUsuarioRequest = UsuarioConverter.toAtualizarUsuarioRequest(usuarioAtualizado);
    const usuarioAtualizadoIntegration = await this.userIntegrationService.atualizarUsuarioPorId(idUsuario, atualizarUsuarioRequest);
    return UsuarioConverter.toUsuarioResponse(usuarioAtualizadoIntegration);
  }

  async deletarUsuarioPorId(idUsuario: number) {
    await this.userIntegrationService.deletarUsuarioPorId(idUsuario);
  }
}
