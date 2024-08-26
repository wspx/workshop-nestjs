import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { MediaTypeEnum } from "./media-type.enum";
import { AlbumEntity } from "./album.entity";

@Entity({ name: 'tracks' })
export class TrackEntity {

  @PrimaryColumn({ name: 'TrackId' })
  id: number;

  @Column({ name: 'Name' })
  nome: string;

  @Column({ name: 'MediaTypeId' })
  tipoMidia: MediaTypeEnum;

  @Column({ name: 'Composer', nullable: true })
  nomeCompositor?: string;

  @Column({ name: 'Milliseconds' })
  tempoEmMilesegundos: number;

  @Column({ name: 'Bytes', nullable: true })
  tamanhoEmBytes?: number;

  @Column({ name: 'UnitPrice', type: 'float' })
  precoUnitario: number;

  @ManyToOne(() => AlbumEntity, album => album.musicas)
  album: AlbumEntity;
}
