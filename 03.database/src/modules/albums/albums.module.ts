import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { AlbumEntity } from 'src/entities/album.entity';
import { TrackEntity } from 'src/entities/track.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AlbumEntity,
      TrackEntity
    ])
  ],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule { };
