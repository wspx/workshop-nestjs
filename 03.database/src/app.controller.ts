import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { CustomHeaderGuard } from './guards/custom-header.guard';
import { TrackIdInterceptor } from './guards/trackId.interceptor';

@Controller('')
export class AppController {
  constructor() { }

  @Get()
  @UseGuards(CustomHeaderGuard)
  helloWorld() {
    return 'Hello World';
  }

  @Get('funfa')
  @UseInterceptors(TrackIdInterceptor)
  abc() { 
    return 'Funfa';
  }
}
