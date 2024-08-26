import { CustomerEntity } from "src/entities/customer.entity";
import { PaginacaoClientesResponse } from "../dto/response/paginacao-clientes.response";
import { ClienteResponse } from "../dto/response/cliente.response";
import { CriarClienteRequest } from "../dto/request/criar-cliente.request";
import { AtualizarClienteRequest } from "../dto/request/atualizar-cliente.request";

export abstract class ClienteConverter {

  static entityToPaginacaoResponse(customersEntities: CustomerEntity[] = [],
    numeroPagina: number = 1, porPagina: number = 30, totalElementos: number = 0): PaginacaoClientesResponse {
    return {
      totalElementos: totalElementos,
      pagina: numeroPagina,
      quantidadePorPagina: porPagina,
      totalPaginas: Math.floor(totalElementos / porPagina),
      conteudo: customersEntities.map(c => this.entityToResponse(c))
    }
  }

  static entityToResponse(customerEntity: CustomerEntity): ClienteResponse {
    return {
      id: customerEntity.id,
      primeiroNome: customerEntity.primeiroNome,
      sobrenome: customerEntity.sobrenome,
      empresa: customerEntity.empresa,
      endereco: customerEntity.endereco,
      cidade: customerEntity.cidade,
      estado: customerEntity.estado,
      pais: customerEntity.pais,
      cep: customerEntity.cep,
      telefone: customerEntity.telefone,
      fax: customerEntity.fax,
      email: customerEntity.email,
    }
  }

  static criarClienteRequestToEntity(criarClienteRequest: CriarClienteRequest): CustomerEntity {
    return {
      id: null,
      primeiroNome: criarClienteRequest.primeiroNome,
      sobrenome: criarClienteRequest.sobrenome,
      empresa: criarClienteRequest.empresa,
      endereco: criarClienteRequest.endereco,
      cidade: criarClienteRequest.cidade,
      estado: criarClienteRequest.estado,
      pais: criarClienteRequest.pais,
      cep: criarClienteRequest.cep,
      telefone: criarClienteRequest.telefone,
      fax: criarClienteRequest.fax,
      email: criarClienteRequest.email,
    }
  }

  static atualizarClienteRequestToEntity(atualizarClienteRequest: AtualizarClienteRequest, customerEntity: CustomerEntity): CustomerEntity {
    customerEntity.primeiroNome = atualizarClienteRequest.primeiroNome;
    customerEntity.sobrenome = atualizarClienteRequest.sobrenome;
    customerEntity.endereco = atualizarClienteRequest.endereco;
    customerEntity.cep = atualizarClienteRequest.cep;
    customerEntity.email = atualizarClienteRequest.email;
    
    return customerEntity;
  }
}
