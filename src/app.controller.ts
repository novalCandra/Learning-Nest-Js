import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get() /// decorator
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/health")
  getHealth() {
    const result = this.appService.gethealth();
    return result
  }
}