import { TrackEntity } from "src/entities/track.entity";
import { MusicaResponse } from "../dto/response/musica.response";
import { convertMediaTypeEnum2TipoMidiaEnum } from "../enums/tipo-midia.enum";

export abstract class MusicaConverter {

  static entitiesToResponse(trackEntity: TrackEntity[] = []): MusicaResponse[] {
    return trackEntity.map(t => this.entityToResponse(t));
  }

  static entityToResponse(trackEntity: TrackEntity): MusicaResponse {
    return {
      id: trackEntity.id,
      nome: trackEntity.nome,
      nomeCompositor: trackEntity.nomeCompositor,
      tipoMidia: convertMediaTypeEnum2TipoMidiaEnum[trackEntity.tipoMidia],
      tempoEmSegundos: Math.round(trackEntity.tempoEmMilesegundos / 1000),
      tamanhoEmMB: parseFloat((trackEntity.tamanhoEmBytes / (1024 * 1024)).toFixed(2)),
      precoUnitario: trackEntity.precoUnitario
    }
  }
}
