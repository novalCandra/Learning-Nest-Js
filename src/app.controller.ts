import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get() /// decorator
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get("/health")
  // getHealth() {
  //   const result = this.appService.gethealth();
  //   return result
  // }

  @Get("/todos")
  getTodos() {
    return this.appService.getTodosAll()
  }


  // Query params
  @Get("/todoQuery")
  queryTodos(@Query() query: { label: string }) {
    return this.appService.getDataQuery
  }

  @Post("/todos")
  createTodo(@Body() createTodoBody: CreateTodoDto) {
    return this.appService.createTodo(createTodoBody)
  }

  @Patch("todos/:todoId")
  updateTodo(@Param("todoId") todoId: string, @Body() updateTodoBody: UpdateTodoDto) {
    const parseNumber = Number.parseInt(todoId)
    return this.appService.updateTodo(parseNumber, updateTodoBody)
  }

  @Delete("/todos/:todoId")
  deleteTodo(@Param("todoId", ParseIntPipe) todoId: number) {
    return this.appService.deleteTodo(todoId)
  }
}