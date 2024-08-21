import { Injectable } from "@nestjs/common";

import { CriarUsuarioRequest } from "src/controllers/dto/requests/criar-usuario.request";
import { UsuarioConverter } from "src/converters/usuario.converter";
import { UserIntegrationService } from "src/integration/dummyjson/user.integration.service";

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

  atualizarUsuarioPorId() {}

  deletarUsuarioPorId() {}

  private verificarExistenciaUsuarioPorId() {}
}
