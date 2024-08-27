import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { CustomerEntity } from "src/entities/customer.entity";
import { ClienteConverter } from "./converters/cliente.converter";
import { CriarClienteRequest } from "./dto/request/criar-cliente.request";
import { AtualizarClienteRequest } from "./dto/request/atualizar-cliente.request";
import { InvoiceEntity } from "src/entities/invoice.entity";
import { CompraConverter } from "./converters/compra.converter";
import { InvoiceItemEntity } from "src/entities/invoice-item.entity";

@Injectable()
export class ClientesService {

  private readonly logger = new Logger(ClientesService.name);

  constructor(
    @InjectRepository(CustomerEntity) private readonly clienteRepository: Repository<CustomerEntity>,
    @InjectRepository(InvoiceEntity) private readonly comprasRepository: Repository<InvoiceEntity>,
    @InjectRepository(InvoiceItemEntity) private readonly comprasItemsRepository: Repository<InvoiceItemEntity>,
  ) { }

  async buscarTodosClientesPaginado(numeroPagina: number = 0, porPagina: number = 30) {
    const totalClientes = await this.clienteRepository.count();
    const clientesPaginado = await this.clienteRepository.find({ take: porPagina, skip: numeroPagina * porPagina });
    return ClienteConverter.entityToPaginacaoResponse(clientesPaginado, numeroPagina, porPagina, totalClientes);
  }

  async buscarClientePorId(idCliente: number) {
    const cliente = await this.clienteRepository.findOne({ where: { id: idCliente } });

    if (!cliente) {
      this.logger.warn(`O cliente ${idCliente} não foi encontrado`);
      throw new NotFoundException(`O cliente ${idCliente} não foi encontrado`);
    }

    return ClienteConverter.entityToResponse(cliente);
  }

  async criarNovoCliente(novoCliente: CriarClienteRequest) {
    this.logger.log(`Criando novo cliente ${JSON.stringify(novoCliente)}`);

    const customerEntity = ClienteConverter.criarClienteRequestToEntity(novoCliente);
    const savedCustomerEntity = await this.clienteRepository.save(customerEntity);
    return ClienteConverter.entityToResponse(savedCustomerEntity);
  }

  async atualizarClientePorId(idCliente: number, clienteAtualizado: AtualizarClienteRequest) {
    this.logger.log(`Atualizar dados do cliente: ${idCliente} => ${JSON.stringify(clienteAtualizado)}`);

    let cliente = await this.clienteRepository.findOne({ where: { id: idCliente } });
    if (!cliente) {
      this.logger.warn(`O cliente ${idCliente} não foi encontrado`);
      throw new NotFoundException(`O cliente ${idCliente} não foi encontrado`);
    }

    cliente = ClienteConverter.atualizarClienteRequestToEntity(clienteAtualizado, cliente)
    const updatedCliente = await this.clienteRepository.save(cliente);

    return ClienteConverter.entityToResponse(updatedCliente);
  }

  async excluirUsuarioPorId(idCliente: number) {
    this.logger.log(`EXCLUIR dados do cliente: ${idCliente}`);

    const cliente = await this.clienteRepository.exists({ where: { id: idCliente } });
    if (!cliente) {
      this.logger.warn(`O cliente ${idCliente} não foi encontrado`);
      throw new NotFoundException(`O cliente ${idCliente} não foi encontrado`);
    }

    await this.clienteRepository.delete({ id: idCliente });
  }

  async encontrarTodasAsComprasCliente(idCliente: number) {
    const cliente = await this.clienteRepository.exists({ where: { id: idCliente } });
    if (!cliente) {
      this.logger.warn(`O cliente ${idCliente} não foi encontrado`);
      throw new NotFoundException(`O cliente ${idCliente} não foi encontrado`);
    }

    const todasComprasUsuario = await this.comprasRepository.find({ where: { cliente: { id: idCliente } } })
    return CompraConverter.entitiesToResponseList(todasComprasUsuario);
  }

  async encontrarCompraPorIdPorCliente(idCliente: number, idCompra: number) {
    const cliente = await this.clienteRepository.exists({ where: { id: idCliente } });
    if (!cliente) {
      this.logger.warn(`O cliente ${idCliente} não foi encontrado`);
      throw new NotFoundException(`O cliente ${idCliente} não foi encontrado`);
    }

    const compra = await this.comprasRepository.exists({ where: { id: idCompra } });
    if (!compra) {
      this.logger.warn(`A compra ${idCompra} não foi encontrado`);
      throw new NotFoundException(`A compra ${idCompra} do cliente ${idCliente} não foi encontrado`);
    }

    const resultado = await this.comprasItemsRepository.find({
      where: {
        compra: {
          id: idCompra,
          cliente: {
            id: idCliente
          }
        }
      },
      relations: {
        compra: true,
        musicas: {
          album: true
        }
      }
    });

    return CompraConverter.entitiestoCompraResponseItem(resultado);
  }
}
