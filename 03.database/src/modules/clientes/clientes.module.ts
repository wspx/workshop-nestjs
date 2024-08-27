import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';

import { CustomerEntity } from 'src/entities/customer.entity';
import { InvoiceEntity } from 'src/entities/invoice.entity';
import { InvoiceItemEntity } from 'src/entities/invoice-item.entity';
import { TrackEntity } from 'src/entities/track.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerEntity, 
      InvoiceEntity, 
      InvoiceItemEntity,
      TrackEntity,
    ])
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule { };
