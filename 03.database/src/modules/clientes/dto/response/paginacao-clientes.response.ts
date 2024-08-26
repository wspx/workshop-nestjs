import { ApiProperty } from "@nestjs/swagger";
import { ClienteResponse } from "./cliente.response";

export class PaginacaoClientesResponse {
  @ApiProperty()
  totalElementos: number;

  @ApiProperty()
  quantidadePorPagina: number;

  @ApiProperty()
  pagina: number;

  @ApiProperty()
  totalPaginas: number;

  @ApiProperty({ type: () =>  [ClienteResponse] })
  conteudo: ClienteResponse[];
}
