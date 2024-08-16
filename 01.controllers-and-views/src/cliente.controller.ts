import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
  constructor() { }

  @Get('config')
  @Header('Content-Type', 'application/xml')
  getClienteConfig() {
    return `<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>`
  }

  @Get()
  getAllClientes() {
    return 'Todos os clientes';
  }

  @Get(':id')
  getClienteById(@Param('id') idCliente: string) {
    return ` Cliente ${idCliente}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createNewCliente(@Body() newCliente: any) {
    return `Criando novo cliente : ${JSON.stringify(newCliente)}`;
  }

  @Put(':id')
  updateClienteById(@Param('id') idCliente: string, @Body() updateCliente: any) {
    return `Atualizar Cliente ${idCliente} e ${JSON.stringify(updateCliente)}`;
  }

  @Delete(':id')
  deleteClienteById(@Param('id') idCliente: string) {
    return `Deletar Cliente ${idCliente}`;
  }
}