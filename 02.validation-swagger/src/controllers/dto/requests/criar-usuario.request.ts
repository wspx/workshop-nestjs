import { GeneroUsuario } from "src/enums/genero-usuario.enum";
import { PapelUsuario } from "src/enums/papel-usuario.enum";
import { TipoSanguineo } from "src/enums/tipo-sanguineo.enum";

export class CriarUsuarioRequest {
  primeiroNome: string;
  ultimoNome: string;
  idade: number;
  genero: GeneroUsuario;
  email: string;
  telefone: string;
  tipoSanguineo: TipoSanguineo;
  dataNascimento: string;
  fotoPerfil: string;
  papelUsuario: PapelUsuario;
  peso: number;
  altura: number;
}