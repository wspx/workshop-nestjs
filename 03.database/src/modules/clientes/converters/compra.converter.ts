import { InvoiceEntity } from "src/entities/invoice.entity";
import { CompraResponse } from "../dto/response/compra.response";
import { InvoiceItemEntity } from "src/entities/invoice-item.entity";
import { CompraItemResponse } from "../dto/response/compra-item.response";
import { AlbumConverter } from "src/modules/albums/converters/albums.converter";
import { MusicaConverter } from "src/modules/albums/converters/musica.converter";

export class CompraConverter {

  static entitiesToResponseList(invoiceEntities: InvoiceEntity[] = []): CompraResponse[] {
    return invoiceEntities.map(inv => this.entityToResponse(inv))
  }

  private static entityToResponse(invoiceEntity: InvoiceEntity): CompraResponse {
    return {
      id: invoiceEntity.id,
      dataCompra: invoiceEntity?.dataCompra?.toISOString(),
      total: invoiceEntity.valorTotalCompra,
      enderecoFaturamentoCompra: {
        cep: invoiceEntity.cepCompra,
        cidade: invoiceEntity.cidadeCompra,
        endereco: invoiceEntity.enderecoCompra,
        estado: invoiceEntity.estadoCompra,
        pais: invoiceEntity.paisCompra
      }
    }
  }

  static entitiestoCompraResponseItem(invoiceItemEntity: InvoiceItemEntity[] = []) {
    return invoiceItemEntity.map(ii => this.entityToCompraResponseItem(ii))
  }

  private static entityToCompraResponseItem(invoiceItemEntity: InvoiceItemEntity): CompraItemResponse {
    return {
      id: invoiceItemEntity.linhaId,
      quantidade: invoiceItemEntity.quantidade,
      precoUnitario: invoiceItemEntity.precoUnitario,
      musica: MusicaConverter.entityToResponse(invoiceItemEntity.musicas),
      album: AlbumConverter.entityToResponse(invoiceItemEntity.musicas.album),
    }
  }
  
}
