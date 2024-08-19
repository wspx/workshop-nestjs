import { Controller, Get, Logger } from '@nestjs/common';

@Controller()
export class AppController {
  
  private readonly logger = new Logger(AppController.name);
  
  constructor() { }

  @Get()
  getHello() {
    this.logger.log('Printando Hello World');
    return {
      msg: 'Hello World'
    }
  }
}