import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { InvoiceItemEntity } from "./invoice-item.entity";

@Entity({ name: 'invoices' })
export class InvoiceEntity {

  @PrimaryGeneratedColumn({ name: 'InvoiceId' })
  id: number;

  @Column({ name: 'InvoiceDate', type: 'datetime' })
  dataCompra: Date;

  @Column({ name: 'BillingAddress', nullable: true })
  enderecoCompra?: string;

  @Column({ name: 'BillingCity', nullable: true })
  cidadeCompra?: string;

  @Column({ name: 'BillingState', nullable: true })
  estadoCompra?: string;

  @Column({ name: 'BillingCountry', nullable: true })
  paisCompra?: string;

  @Column({ name: 'BillingPostalCode', nullable: true })
  cepCompra?: string;

  @Column({ name: 'Total', type: 'float' })
  valorTotalCompra: number;

  @ManyToOne(() => CustomerEntity, customer => customer.compras)
  @JoinColumn({ name: 'CustomerId' })
  cliente: CustomerEntity;

  @OneToMany(() => InvoiceItemEntity, invoiceItem => invoiceItem.compra)
  @JoinColumn({ name: 'InvoiceId' })
  itemCompra: InvoiceItemEntity[];
}
