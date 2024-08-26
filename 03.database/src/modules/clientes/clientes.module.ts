import { Module } from '@nestjs/common';

import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/entities/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEntity])
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule { };
