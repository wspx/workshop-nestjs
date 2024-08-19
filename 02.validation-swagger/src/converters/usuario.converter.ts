import { UsuarioResponse } from "src/controllers/dto/responses/usuario.response";

export abstract class UsuarioConverter {
  public static toResponse(): UsuarioResponse {
    return new UsuarioResponse();
  }

  public static toIntegrationRequest(): UsuarioResponse {
    return new UsuarioResponse();
  }
}