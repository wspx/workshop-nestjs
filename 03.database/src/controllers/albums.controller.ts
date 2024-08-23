import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumsEntity } from 'src/entities/album.entity';
import { Repository } from 'typeorm';

@Controller('/v1/albums')
export class AlbumsController {
  constructor() { }

  @Get()
  async encontrarTodosAlbumsPaginado() { }

  @Get(':id')
  async encontrarAlbumPorId(idAlbum: number) { }

  @Get(':id/musicas')
  async encontrarTodasMusicasAlbum(idAlbum: number) { }
}
