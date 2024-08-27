import { ApiProperty } from "@nestjs/swagger";
import { EnderecoFaturamentoComprarResponse } from "./endereco-faturamento-compra.response";

export class CompraResponse {
  @ApiProperty()
  id: number;
  
  @ApiProperty()
  dataCompra: string;
  
  @ApiProperty()
  total: number;
  
  @ApiProperty()
  enderecoFaturamentoCompra: EnderecoFaturamentoComprarResponse;
}
