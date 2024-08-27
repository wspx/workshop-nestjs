import { ApiProperty } from "@nestjs/swagger";

export class EnderecoFaturamentoComprarResponse {
  @ApiProperty()
  endereco: string;
  
  @ApiProperty()
  cidade: string;
  
  @ApiProperty()
  estado: string;
  
  @ApiProperty()
  pais: string;
  
  @ApiProperty()
  cep: string;
}
