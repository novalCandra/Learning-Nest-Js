import { BadRequestException, Injectable, Query } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto.js";
import { UpdateTodoDto } from "./dto/update-todo.dto.js";
import { TodoRepository } from "./todo.repository.js";
import { GetTodosDto } from "./dto/get-todo.dto.js";

@Injectable()
export class TodoService {
    constructor(private readonly todoRepository: TodoRepository) { }
    // service get todosh
    async getTodosAll() {
        const allTodos = await this.todoRepository.findyMany()
        return allTodos
    }

    async getDataQuery(query: GetTodosDto) {
        if (query.overdue) {
            return this.todoRepository.findOverdueTodo();
        }
        return await this.todoRepository.fitDeatilsData();
    }

    async createTodo(createTodoBody: CreateTodoDto) {
        const createData = await this.todoRepository.createTodo(createTodoBody)
        return createData
    }

    async deleteTodo(todoId: number) {
        const data = await this.todoRepository.deleteTodo(todoId)
        console.log(data)
        return {
            message: "success delete data",
            status: true
        }

    }

    async updateTodo(todoId: number, updateTodoBody: UpdateTodoDto) {
        // all data and update
        // const todos = await this.todoRepository.findyMany()
        // return todos

        // logic check todo
        const todoExitings = await this.todoRepository.findById(todoId);
        if (!todoExitings) {
            throw new BadRequestException('todo does not exists')
        }

        return await this.todoRepository.updateTodo(todoId, updateTodoBody)
    }
}