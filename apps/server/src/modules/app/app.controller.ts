import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('apps')
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('app config init', appService);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
