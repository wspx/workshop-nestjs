import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './modules/clientes/clientes.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'chinook.db'),
      autoLoadEntities: true,
      logging: true
    }),
    AlbumsModule,
    ClientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { 
  constructor() {}
}
