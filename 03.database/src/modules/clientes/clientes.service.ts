import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientesService {

  constructor() {}

  async buscarTodosClientesPaginado() { }

  async buscarClientePorId(idCliente: number) { }

  async criarNovoCliente(novoCliente: any) { }

  async atualizarClientePorId(idCliente: number, clienteAtualizado: any) { }

  async excluirUsuarioPorId(idCliente: number) { }

  async encontrarTodasAsComprasCliente(idCliente: number) { }

  async encontrarCompraPorIdPorCliente(idCliente: number) { }
}
