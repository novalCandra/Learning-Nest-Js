import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { TodoService } from "./todo.service.js";
import { CreateTodoDto } from "../../dto/create-todo.dto.js";
import { UpdateTodoDto } from "../../dto/update-todo.dto.js";

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }
    @Get()
    getTodos() {
        return this.todoService.getTodosAll()
    }

    // Query params
    @Get("/todoQuery")
    queryTodos(@Query() query: { label: string }) {
        return this.todoService.getDataQuery
    }

    @Post()
    createTodo(@Body() createTodoBody: CreateTodoDto) {
        return this.todoService.createTodo(createTodoBody)
    }

    @Patch("/:todoId")
    updateTodo(@Param("todoId") todoId: string, @Body() updateTodoBody: UpdateTodoDto) {
        const parseNumber = Number.parseInt(todoId)
        return this.todoService.updateTodo(parseNumber, updateTodoBody)
    }

    @Delete("/:todoId")
    deleteTodo(@Param("todoId", ParseIntPipe) todoId: number) {
        return this.todoService.deleteTodo(todoId)
    }
}