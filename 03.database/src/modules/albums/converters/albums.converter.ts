import { AlbumEntity } from "src/entities/album.entity";
import { AlbumResponse } from "../dto/response/album.response";
import { PaginacaoAlbumsResponse } from "../dto/response/paginacao-albums.response";

export abstract class AlbumConverter {

  static entityToPaginacaoResponse(albumEntity: AlbumEntity[] = [], 
    numeroPagina: number = 1, porPagina: number = 30, totalElementos: number): PaginacaoAlbumsResponse {
    return {
      totalElementos: totalElementos,
      pagina: numeroPagina,
      quantidadePorPagina: porPagina,
      totalPaginas: Math.floor(totalElementos / porPagina),
      conteudo: albumEntity.map(a => {
        return {
          albumId: a.id,
          titulo: a.titulo
        }
      })
    }
  }

  static entityToResponse(albumEntity: AlbumEntity): AlbumResponse {
    return {
      albumId: albumEntity.id,
      titulo: albumEntity.titulo
    }
  }
}
