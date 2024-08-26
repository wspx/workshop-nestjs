import { ApiProperty } from "@nestjs/swagger";

export class AlbumResponse {
  
  @ApiProperty()
  albumId: number;
  
  @ApiProperty()
  titulo: string;
}
