import { Body, Controller, DefaultValuePipe, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsuarioService } from 'src/services/usuario.service';

import { PaginacaoResonse } from './dto/responses/paginacao.response';
import { UsuarioResponse } from './dto/responses/usuario.response';
import { CriarUsuarioRequest } from './dto/requests/criar-usuario.request';
import { AtualizarUsuarioRequest } from './dto/requests/atualizar-usuario.request';


@ApiTags('Usuários')
@Controller('usuarios')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService
  ) { }

  @Get()
  @ApiQuery({ name: 'numeroPagina', required: false })
  @ApiQuery({ name: 'porPagina', required: false })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Paginação dos usuário cadastrados',
    type: PaginacaoResonse<UsuarioResponse>
  })
  async buscarUsuarioPaginado(
    @Query('numeroPagina', new DefaultValuePipe(0), ParseIntPipe) numeroPagina: number = 0,
    @Query('porPagina', new DefaultValuePipe(30), ParseIntPipe) porPagina: number = 30
  ): Promise<PaginacaoResonse<UsuarioResponse>> {
    return await this.usuarioService.buscarUsuarioPaginada(numeroPagina, porPagina);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retorno usuário encontrado pelo ID',
    type: UsuarioResponse
  })
  async buscarUsuarioPorId(@Param('id', ParseIntPipe) idUsuario: number): Promise<UsuarioResponse> {
    return await this.usuarioService.buscarUsuarioPorId(idUsuario);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Novo usuário criado com sucesso',
    type: UsuarioResponse
  })
  async criarUsuario(@Body() novoUsuario: CriarUsuarioRequest): Promise<UsuarioResponse> {
    return await this.usuarioService.criarNovoUsuario(novoUsuario);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Usuário atualizado com sucesso pelo ID',
    type: UsuarioResponse
  })
  async atualizarUsuarioPorId(
    @Param('id', ParseIntPipe) idUsuario: number,
    @Body() usuarioAtualizado: AtualizarUsuarioRequest): Promise<UsuarioResponse> {
    return this.usuarioService.atualizarUsuarioPorId(idUsuario, usuarioAtualizado)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletarUsuarioPorId(@Param('id', ParseIntPipe) idUsuario: number) {
    await this.usuarioService.deletarUsuarioPorId(idUsuario);
  }
}
