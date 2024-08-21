import { CriarUsuarioRequest } from "src/controllers/dto/requests/criar-usuario.request";
import { PaginacaoResonse } from "src/controllers/dto/responses/paginacao.response";
import { UsuarioResponse } from "src/controllers/dto/responses/usuario.response";
import { GeneroUsuario } from "src/enums/genero-usuario.enum";
import { PapelUsuario } from "src/enums/papel-usuario.enum";
import { TipoSanguineo } from "src/enums/tipo-sanguineo.enum";
import { CreateUserRequest } from "src/integration/dummyjson/dto/request/create-user.request";
import { UserResponse } from "src/integration/dummyjson/dto/response/user.response";
import { UserPaginationResponse } from "src/integration/dummyjson/dto/response/users-pagination.response";

export abstract class UsuarioConverter {
  public static toUsuarioPaginado(userPaginationResponse: UserPaginationResponse): PaginacaoResonse<UsuarioResponse> {
    return {
      totalElementos: userPaginationResponse.total,
      pagina: userPaginationResponse.skip,
      quantidadePorPagina: userPaginationResponse.limit,
      conteudo: userPaginationResponse.users.map(user => {
        return {
          idUsuario: user.id,
          primeiroNome: user.firstName,
          ultimoNome: user.lastName,
          idade: user.age,
          genero: GeneroUsuario.MASCULINO,
          email: user.email,
          telefone: user.phone,
          tipoSanguineo: TipoSanguineo.B_NEGATIVO,
          dataNascimento: user.birthDate,
          fotoPerfil: user.image,
          papelUsuario: PapelUsuario.GERENTE,
          altura: user.height,
          peso: user.weight,
        }
      })
    };
  }

  public static toUsuarioResponse(userResponse: UserResponse): UsuarioResponse {
    return {
      idUsuario: userResponse.id,
      primeiroNome: userResponse.firstName,
      ultimoNome: userResponse.lastName,
      idade: userResponse.age,
      genero: GeneroUsuario.MASCULINO,
      email: userResponse.email,
      telefone: userResponse.phone,
      tipoSanguineo: TipoSanguineo.B_NEGATIVO,
      dataNascimento: userResponse.birthDate,
      fotoPerfil: userResponse.image,
      papelUsuario: PapelUsuario.GERENTE,
      altura: userResponse.height,
      peso: userResponse.weight,
    };
  }

  public static toNovoUsuarioRequest(novoUsuario: CriarUsuarioRequest): CreateUserRequest {
    return {
      firstName: novoUsuario.primeiroNome,
      lastName: novoUsuario.ultimoNome,
      age: novoUsuario.idade,
      gender: 'female',
      email: novoUsuario.email,
      phone: novoUsuario.telefone,
      bloodGroup: novoUsuario.tipoSanguineo,
      birthDate: novoUsuario.dataNascimento,
      image: novoUsuario.fotoPerfil,
      role: novoUsuario.papelUsuario,
      weight: novoUsuario.peso,
      height: novoUsuario.altura
    }
  }
}
