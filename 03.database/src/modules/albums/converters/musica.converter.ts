import { TrackEntity } from "src/entities/track.entity";
import { MusicaResponse } from "../dto/response/musica.response";
import { convertMediaTypeEnum2TipoMidiaEnum } from "../enums/tipo-midia.enum";

export abstract class MusicaConverter {

  static entityToResponse(trackEntity: TrackEntity[] = []): MusicaResponse[] {
    return trackEntity.map(t => {
      return {
        id: t.id,
        nome: t.nome,
        nomeCompositor: t.nomeCompositor,
        tipoMidia: convertMediaTypeEnum2TipoMidiaEnum[t.tipoMidia],
        tempoEmSegundos: Math.round(t.tempoEmMilesegundos / 1000),
        tamanhoEmMB: parseFloat((t.tamanhoEmBytes / (1024 * 1024)).toFixed(2)),
        precoUnitario: t.precoUnitario
      }
    });
  }
}
