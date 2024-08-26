import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { TrackEntity } from "./track.entity";

@Entity({ name: 'albums' })
export class AlbumEntity {

  @PrimaryColumn({ name: 'AlbumId' })
  id: number;

  @Column({ name: 'Title' })
  titulo: string;

  @OneToMany(() => TrackEntity, track => track.album)
  musicas: TrackEntity[];
}
