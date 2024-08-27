import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceEntity } from "./invoice.entity";
import { TrackEntity } from "./track.entity";

@Entity({ name: 'invoice_items' })
export class InvoiceItemEntity {

  @PrimaryGeneratedColumn({ name: 'InvoiceLineId' })
  linhaId: number;

  @Column({ name: 'UnitPrice', type: 'float' })
  precoUnitario: number;

  @Column({ name: 'Quantity' })
  quantidade: number;

  @ManyToOne(() => InvoiceEntity, invoice => invoice.itemCompra)
  @JoinColumn({ name: 'InvoiceId' })
  compra: InvoiceEntity;

  @OneToOne(() => TrackEntity, track => track.itemCompra)
  @JoinColumn({ name: 'TrackId' })
  musicas: TrackEntity;
}
