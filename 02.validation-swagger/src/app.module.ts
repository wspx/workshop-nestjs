import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { UserIntegrationService } from './integration/dummyjson/user.integration.service';


@Module({
  imports: [
    HttpModule
  ],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    UserIntegrationService,
  ],
})
export class AppModule {}
