import { Injectable } from "@nestjs/common";

@Injectable()
export class AlbumsService {

  constructor() {}

  async encontrarTodosAlbumsPaginado() { }

  async encontrarAlbumPorId(idAlbum: number) { }

  async encontrarTodasMusicasAlbum(idAlbum: number) { }
}
