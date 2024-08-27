import { ApiProperty } from "@nestjs/swagger";
import { TipoMidiaEnum } from "../../enums/tipo-midia.enum";

export class MusicaResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty({ enum: TipoMidiaEnum, enumName: 'TipoMidiaEnum' })
  tipoMidia: TipoMidiaEnum;

  @ApiProperty()
  nomeCompositor: string;

  @ApiProperty()
  tempoEmSegundos: number;

  @ApiProperty()
  tamanhoEmMB: number;

  @ApiProperty()
  precoUnitario: number;
}
