import { MediaTypeEnum } from "src/entities/media-type.enum";

export enum TipoMidiaEnum {
  MPEG            = 'MPEG',
  AAC_PROTEGIDO   = 'ACC_PROTEGIDO',
  MPEG_PROTEGIDO  = 'MPEG_PROTEGIDO',
  ACC_COMPRADO    = 'ACC_COMPRADO',
  ACC             = 'ACC',
}


export const convertMediaTypeEnum2TipoMidiaEnum = {
  [MediaTypeEnum.MPEG]            : TipoMidiaEnum.MPEG,
  [MediaTypeEnum.PROTECTED_AAC]   : TipoMidiaEnum.AAC_PROTEGIDO,
  [MediaTypeEnum.PROTECTED_MPEG]  : TipoMidiaEnum.MPEG_PROTEGIDO,
  [MediaTypeEnum.PURCHASED_ACC]   : TipoMidiaEnum.ACC_COMPRADO,
  [MediaTypeEnum.ACC]             : TipoMidiaEnum.ACC,
}

export const convertTipoMidiaEnum2MediaTypeEnum = {
  [TipoMidiaEnum.MPEG]            : MediaTypeEnum.MPEG,
  [TipoMidiaEnum.AAC_PROTEGIDO]   : MediaTypeEnum.PROTECTED_AAC,
  [TipoMidiaEnum.MPEG_PROTEGIDO]  : MediaTypeEnum.PROTECTED_MPEG,
  [TipoMidiaEnum.ACC_COMPRADO]    : MediaTypeEnum.PURCHASED_ACC,
  [TipoMidiaEnum.ACC]             : MediaTypeEnum.ACC,
}
