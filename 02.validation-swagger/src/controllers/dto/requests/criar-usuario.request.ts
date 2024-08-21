import { ApiProperty } from "@nestjs/swagger";
import { GeneroUsuario } from "src/enums/genero-usuario.enum";
import { PapelUsuario } from "src/enums/papel-usuario.enum";
import { TipoSanguineo } from "src/enums/tipo-sanguineo.enum";

export class CriarUsuarioRequest {
  @ApiProperty()
  primeiroNome: string;

  @ApiProperty()
  ultimoNome: string;

  @ApiProperty()
  idade: number;

  @ApiProperty({ enum: GeneroUsuario, enumName: 'GeneroUsuario' })
  genero: GeneroUsuario;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telefone: string;

  @ApiProperty({ enum: TipoSanguineo, enumName: 'TipoSanguineo' })
  tipoSanguineo: TipoSanguineo;

  @ApiProperty({ example: '1990-01-01' })
  dataNascimento: string;

  @ApiProperty({ description: 'URL da foto de perfil do usuário. OBS: A URL deve ser publica e acessivel', example: 'http://teste.s3.aws.com/assetes/photo.png'})
  fotoPerfil: string;

  @ApiProperty({ enum: PapelUsuario, enumName: 'PapelUsuario' })
  papelUsuario: PapelUsuario;

  @ApiProperty({ description: 'Peso do usuário em quilogramas', example: 67.2 })
  peso: number;

  @ApiProperty({ description: 'Altura do usuário em centrimetros', example: 178 })
  altura: number;
}
