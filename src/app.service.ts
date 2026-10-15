import { Injectable, Query } from '@nestjs/common';
import { todo } from 'node:test';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';
import { GetTodosDto } from './dto/get-todo.dto.js';
type typeTodo = {
  id: number;
  label: string;
}

// Data Dumy
let todos: typeTodo[] = [
  {
    id: 1,
    label: "novel"
  },
  {
    id: 2,
    label: "komik"
  },
  {
    id: 3,
    label: "rakyat"
  },
  {
    id: 4,
    label: "dongeng"
  }
]
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  gethealth() {
    return {
      message: "okay",
      timeStampa: new Date,
      version: 1
    }
  }


  // TODO
  // service get todosh
  getTodosAll() {
    return todos
  }

  getDataQuery(@Query() query: GetTodosDto) {
    return todos
  }

  createTodo(createTodoBody: CreateTodoDto) {
    todos.push(createTodoBody)
    return todos
  }

  deleteTodo(todoId: number) {
    const deletedata = todos.filter(todo => todo.id != todoId)
    return deletedata
  }

  updateTodo(todoId: number, updateTodoBody: UpdateTodoDto) {
    const updateDataIndex = todos.findIndex(todo => todo.id === todoId);
    todos[updateDataIndex] = {
      id: todoId,
      ...updateTodoBody
    }
    return todos
  }
}
