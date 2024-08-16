import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { ClientesController } from './cliente.controller';
import { AppController } from './app.controller';
import { DashboardController } from './dashboard.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/static',
    })
  ],
  controllers: [
    AppController,
    ClientesController,
    DashboardController,
  ],
  providers: [],
})
export class AppModule {}
