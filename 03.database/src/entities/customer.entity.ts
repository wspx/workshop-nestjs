import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceEntity } from "./invoice.entity";

@Entity({ name: 'customers' })
export class CustomerEntity {

  @PrimaryGeneratedColumn({ name: 'CustomerId' })
  id: number;

  @Column({ name: 'FirstName' })
  primeiroNome: string;

  @Column({ name: 'LastName' })
  sobrenome: string;

  @Column({ name: 'Company', nullable: true })
  empresa?: string;

  @Column({ name: 'Address', nullable: true })
  endereco?: string;

  @Column({ name: 'City', nullable: true })
  cidade?: string;

  @Column({ name: 'State', nullable: true })
  estado?: string;

  @Column({ name: 'Country', nullable: true })
  pais?: string;

  @Column({ name: 'PostalCode', nullable: true })
  cep?: string;

  @Column({ name: 'Phone', nullable: true })
  telefone?: string;

  @Column({ name: 'Fax', nullable: true })
  fax?: string;

  @Column({ name: 'Email', nullable: true })
  email: string;

  @OneToMany(() => InvoiceEntity , invoice => invoice.cliente)
  compras: InvoiceEntity[];
}
