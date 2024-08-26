import { Controller, DefaultValuePipe, Get, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AlbumsService } from './albums.service';

import { AlbumResponse } from './dto/response/album.response';
import { PaginacaoAlbumsResponse } from './dto/response/paginacao-albums.response';
import { MusicaResponse } from './dto/response/musica.response';

@ApiTags('Albums')
@Controller('/v1/albums')
export class AlbumsController {
  constructor(
    private readonly albumsService: AlbumsService
  ) {}

  @Get()
  @ApiQuery({ name: 'numeroPagina', required: false })
  @ApiQuery({ name: 'porPagina', required: false })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Busca de todos os albums paginados',
    type: PaginacaoAlbumsResponse
  })
  async encontrarTodosAlbumsPaginado(
    @Query('numeroPagina', new DefaultValuePipe(0), ParseIntPipe) numeroPagina: number = 0,
    @Query('porPagina', new DefaultValuePipe(30), ParseIntPipe) porPagina: number = 30
  ) {
    return this.albumsService.encontrarTodosAlbumsPaginado(numeroPagina, porPagina);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retorno de um album encontrado pelo ID',
    type: AlbumResponse
  })
  async encontrarAlbumPorId(@Param('id', ParseIntPipe) idAlbum: number) {
    return this.albumsService.encontrarAlbumPorId(idAlbum);
   }

  @Get(':id/musicas')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retorno de todas as músicas de um album encontrado pelo ID',
    type: [MusicaResponse]
  })
  async encontrarTodasMusicasAlbum(@Param('id', ParseIntPipe) idAlbum: number) {
    return this.albumsService.encontrarTodasMusicasAlbum(idAlbum);
  }
}
