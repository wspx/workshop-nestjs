import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clientes')
@Controller('/v1/clientes')
export class ClientesController {
  constructor() { }

  @Get()
  async buscarTodosClientesPaginado() { }

  @Get(':id')
  async buscarClientePorId(idCliente: number) { }

  @Post()
  async criarNovoCliente(novoCliente: any) { }

  @Put(':id')
  async atualizarClientePorId(idCliente: number, clienteAtualizado: any) { }

  @Delete(':id')
  async excluirUsuarioPorId(idCliente: number) { }

  @Get(':id/compras')
  async encontrarTodasAsComprasCliente(idCliente: number) { }

  @Get(':id/compras/:idCompra')
  async encontrarCompraPorIdPorCliente(idCliente: number) { }
}
