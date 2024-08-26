import { ApiProperty } from "@nestjs/swagger";
import { AlbumResponse } from "./album.response";

export class PaginacaoAlbumsResponse {
  @ApiProperty()
  totalElementos: number;

  @ApiProperty()
  quantidadePorPagina: number;

  @ApiProperty()
  pagina: number;

  @ApiProperty()
  totalPaginas: number;

  @ApiProperty({ type: () =>  [AlbumResponse] })
  conteudo: AlbumResponse[];
}
