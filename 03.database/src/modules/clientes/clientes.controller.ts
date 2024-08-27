import { Body, Controller, DefaultValuePipe, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { PaginacaoClientesResponse } from './dto/response/paginacao-clientes.response';
import { ClienteResponse } from './dto/response/cliente.response';
import { CriarClienteRequest } from './dto/request/criar-cliente.request';
import { AtualizarClienteRequest } from './dto/request/atualizar-cliente.request';
import { CompraResponse } from './dto/response/compra.response';
import { CompraItemResponse } from './dto/response/compra-item.response';

@ApiTags('Clientes')
@Controller('/v1/clientes')
export class ClientesController {
  constructor(
    private readonly clientesService: ClientesService
  ) { }

  @Get()
  @ApiQuery({ name: 'numeroPagina', required: false })
  @ApiQuery({ name: 'porPagina', required: false })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Busca de todos os clientes paginados',
    type: PaginacaoClientesResponse
  })
  async buscarTodosClientesPaginado(
    @Query('numeroPagina', new DefaultValuePipe(0), ParseIntPipe) numeroPagina: number = 0,
    @Query('porPagina', new DefaultValuePipe(30), ParseIntPipe) porPagina: number = 30
  ) {
    return await this.clientesService.buscarTodosClientesPaginado(numeroPagina, porPagina);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Encontrar um determinado cliente por ID',
    type: ClienteResponse
  })
  async buscarClientePorId(@Param('id', ParseIntPipe) idCliente: number) { 
    return await this.clientesService.buscarClientePorId(idCliente);
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Criar um novo cliente',
    type: ClienteResponse
  })
  async criarNovoCliente(@Body() novoCliente: CriarClienteRequest) { 
    return await this.clientesService.criarNovoCliente(novoCliente);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Atualizar um cliente pelo ID',
    type: ClienteResponse
  })
  async atualizarClientePorId(
    @Param('id', ParseIntPipe) idCliente: number, 
    @Body() clienteAtualizado: AtualizarClienteRequest
  ) { 
    return await this.clientesService.atualizarClientePorId(idCliente, clienteAtualizado);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Exclui um cliente pelo ID',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async excluirUsuarioPorId(@Param('id', ParseIntPipe) idCliente: number) { 
    return await this.clientesService.excluirUsuarioPorId(idCliente);
  }

  @Get(':id/compras')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retorna todas as compras feita por um cliente',
    type: [CompraResponse]
  })
  async encontrarTodasAsComprasCliente(@Param('id', ParseIntPipe) idCliente: number) {
    return await this.clientesService.encontrarTodasAsComprasCliente(idCliente);
  }

  @Get(':id/compras/:idCompra')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Retorna todos os itens de uma compra feita por um cliente',
    type: [CompraItemResponse]
  })
  async encontrarCompraPorIdPorCliente(
    @Param('id', ParseIntPipe) idCliente: number, 
    @Param('idCompra', ParseIntPipe) idCompra: number) { 
      return await this.clientesService.encontrarCompraPorIdPorCliente(idCliente, idCompra);
    }
}
