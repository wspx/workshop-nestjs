import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

import { UsuarioService } from 'src/services/usuario.service';

import { PaginacaoResonse } from './dto/responses/paginacao.response';
import { UsuarioResponse } from './dto/responses/usuario.response';
import { CriarUsuarioRequest } from './dto/requests/criar-usuario.request';
import { AtualizarUsuarioRequest } from './dto/requests/atualizar-usuario.request';


@Controller('usuarios')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService
  ) {}

  @Get()
  async buscarUsuarioPaginado(
    @Query('numeroPagina') numeroPagina?: number,
    @Query('porPagina') porPagina: number = 30
  ): Promise<PaginacaoResonse<UsuarioResponse>> {
    return await this.usuarioService.buscarUsuarioPaginada(numeroPagina, porPagina);
  }

  @Get(':id')
  async buscarUsuarioPorId(@Param('id') idUsuario: number): Promise<UsuarioResponse> {
    return await this.usuarioService.buscarUsuarioPorId(idUsuario);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criarUsuario(@Body() novoUsuario: CriarUsuarioRequest): Promise<UsuarioResponse> {
    return await this.usuarioService.criarNovoUsuario(novoUsuario);
  }

  @Put(':id')
  atualizarUsuarioPorId(
    @Param('id') idUsuario: number, 
    @Body() usuarioAtualizado: AtualizarUsuarioRequest): UsuarioResponse {
      return new UsuarioResponse();
    }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deletarUsuarioPorId(@Param('id') idUsuario: number) {

  }
}
