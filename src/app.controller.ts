import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';

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