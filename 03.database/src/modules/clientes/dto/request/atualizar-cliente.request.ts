import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class AtualizarClienteRequest {
  @ApiProperty()
  @IsNotEmpty({ message: 'O atributo nome deve ser informado.' })
  @Length(2, 255, { message: 'O atributo nome deve ter entre 2 e 255 carateres.' })
  primeiroNome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O atributo sobrenome deve ser informado.' })
  @Length(2, 255, { message: 'O atributo sobrenome deve ter entre 2 e 255 carateres.' })
  sobrenome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O endereço deve ser informado.' })
  @Length(2, 255, { message: 'O endereço deve ter entre 2 e 500 carateres.' })
  endereco: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O CEP deve ser informado' })
  @Length(9, 9, { message: 'O CEP deve contem exatamente 9 carateres' })
  @Matches(/^[0-9]{5}-[0-9]{3}$/g, { message: 'O CEP deve seguir o padrão: 00000-000'})
  cep: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O atributo Email não pode estar vázio.' })
  @IsEmail({}, { message: 'O Email deve ser ser um endereço válido.' })
  email: string
}
