import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PaginacaoResonse } from './dto/responses/paginacao.response';
import { UsuarioResponse } from './dto/responses/usuario.response';
import { CriarUsuarioRequest } from './dto/requests/criar-usuario.request';
import { AtualizarUsuarioRequest } from './dto/requests/atualizar-usuario.request';

@Controller('usuarios')
export class UsuarioController {
  constructor() { }

  @Get()
  buscarUsuarioPaginado(): PaginacaoResonse<UsuarioResponse> {
    return {
      totalElementos: 10000,
      quantidadePorPagina: 100,
      pagina: 0,
      conteudo: []
    };
  }

  @Get(':id')
  buscarUsuarioPorId(@Param('id') idUsuario: number): UsuarioResponse {
    return new UsuarioResponse();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  criarUsuario(@Body() novoUsuario: CriarUsuarioRequest): UsuarioResponse {
    return new UsuarioResponse();
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