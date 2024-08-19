import { PapelUsuario } from "src/enums/papel-usuario.enum";

export class AtualizarUsuarioRequest {
  email: string;
  telefone: string;
  dataNascimento: string;
  fotoPerfil: string;
  papelUsuario: PapelUsuario;
  peso: number;
  altura: number;
}