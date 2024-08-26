import { ApiProperty } from "@nestjs/swagger";

export class ClienteResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  primeiroNome: string;

  @ApiProperty()
  sobrenome: string;

  @ApiProperty()
  empresa?: string;

  @ApiProperty()
  endereco?: string;

  @ApiProperty()
  cidade?: string;

  @ApiProperty()
  estado?: string;

  @ApiProperty()
  pais?: string;

  @ApiProperty()
  cep?: string;

  @ApiProperty()
  telefone?: string;

  @ApiProperty()
  fax?: string;

  @ApiProperty()
  email: string
}
