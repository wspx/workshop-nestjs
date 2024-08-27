import { ApiProperty } from "@nestjs/swagger";
import { AlbumResponse } from "src/modules/albums/dto/response/album.response";
import { MusicaResponse } from "src/modules/albums/dto/response/musica.response";

export class CompraItemResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  precoUnitario: number;
  
  @ApiProperty()
  quantidade: number;
  
  @ApiProperty()
  musica: MusicaResponse;
  
  @ApiProperty()
  album: AlbumResponse;
}
