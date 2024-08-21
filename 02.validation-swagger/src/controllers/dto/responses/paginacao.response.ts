import { ApiProperty } from "@nestjs/swagger";

export class PaginacaoResonse<T> {
  @ApiProperty()
  totalElementos: number;

  @ApiProperty()
  quantidadePorPagina: number;

  @ApiProperty()
  pagina: number;

  @ApiProperty()
  conteudo: T[];
}
