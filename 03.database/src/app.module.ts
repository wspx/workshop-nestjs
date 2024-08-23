import { Module } from '@nestjs/common';

import { AlbumsController } from './controllers/albums.controller';
import { ClientesController } from './controllers/clientes.controller';

import { AlbumsService } from './services/albums.service';
import { ClientesService } from './services/clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';
import { AlbumsEntity } from './entities/album.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: __dirname + '../chinook.db',
      autoLoadEntities: true,
      // entities: [AlbumsEntity],
      synchronize: true
    })
  ],
  controllers: [
    ClientesController,
    AlbumsController,
  ],
  providers: [
    AlbumsService,
    ClientesService
  ],
})
export class AppModule { 
  constructor(
    private readonly dataSource: DataSource,
  ) {}
}
