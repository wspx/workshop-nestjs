import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { join } from 'path';

import { ClientesModule } from './modules/clientes/clientes.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { EstatisticasService } from './modules/clientes/estatisticas.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'chinook.db'),
      autoLoadEntities: true,
      logging: true
    }),
    ScheduleModule.forRoot(),
    AlbumsModule,
    ClientesModule,
  ],
  controllers: [],
  providers: [EstatisticasService],
})
export class AppModule { 
  constructor() {}
}
