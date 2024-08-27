import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AlbumEntity } from "src/entities/album.entity";
import { AlbumConverter } from "./converters/albums.converter";
import { TrackEntity } from "src/entities/track.entity";
import { MusicaConverter } from "./converters/musica.converter";

@Injectable()
export class AlbumsService {

  constructor(
    @InjectRepository(AlbumEntity) private readonly albumRepository: Repository<AlbumEntity>,
    @InjectRepository(TrackEntity) private readonly trackRespository: Repository<TrackEntity>,
  ) { }

  async encontrarTodosAlbumsPaginado(numeroPagina: number = 0, porPagina: number = 30) {
    const totalAlbumsDatabase = await this.albumRepository.count();
    const albumsDatabase = await this.albumRepository.find({ take: porPagina, skip: numeroPagina * porPagina });
    return AlbumConverter.entityToPaginacaoResponse(albumsDatabase, numeroPagina, porPagina, totalAlbumsDatabase);
  }

  async encontrarAlbumPorId(idAlbum: number) {
    const albumPorId = await this.albumRepository.findOne({ where: { id: idAlbum } });
    
    if (!albumPorId) {
      throw new NotFoundException(`Album ${idAlbum} não encontrado`);
    }

    return AlbumConverter.entityToResponse(albumPorId);
  }

  async encontrarTodasMusicasAlbum(idAlbum: number) {
    // return this.buscarMusicaImpl01(idAlbum);
    return this.buscarMusicaImpl02(idAlbum);
  }

  // private async buscarMusicaImpl01(idAlbum: number) {
  //   const existeAlbum = await this.albumRepository.exists({ where: { id: idAlbum }});
    
  //   if (!existeAlbum) {
  //     throw new NotFoundException(`Album ${idAlbum} não encontrado`);
  //   }

  //   const musicas = await this.trackRespository.find({ where: { albumId: idAlbum}});
  //   return MusicaConverter.entityToResponse(musicas);
  // }

  private async buscarMusicaImpl02(idAlbum: number) {
    const album = await this.albumRepository.findOne({
      relations: {
        musicas: true
      },
      where: { id: idAlbum }
    });

    if (!album) {
      throw new NotFoundException(`Album ${idAlbum} não encontrado`);
    }

    return MusicaConverter.entitiesToResponse(album.musicas);
  }
}
