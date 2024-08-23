import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'albums' })
export class AlbumsEntity {
  
  @PrimaryColumn({ name: 'AlbumId' })
  id: number;

  @Column({name: 'Title'})
  titulo: string;
}
