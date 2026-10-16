import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../infrastructure/database/database.service.js";
import { CreateTodoDto } from "./dto/create-todo.dto.js";
import { UpdateTodoDto } from "./dto/update-todo.dto.js";
import { Prisma } from "../../generated/prisma/client.js";

@Injectable()
export class TodoRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async findyMany() {
        return await this.databaseService.todo.findMany()
    }

    async fitDeatilsData() {
        return await this.databaseService.todo.findMany()
    }

    async createTodo(createTodoBody: CreateTodoDto) {
        return await this.databaseService.todo.create({
            data: createTodoBody
        })
    }

    async findOverdueTodo() {
        return this.databaseService.todo.findMany({
            where: {
                dueDate: {
                    lt: new Date()
                }
            }
        })
    }

    async updateTodo(todoId: number, updateTodoBody: UpdateTodoDto) {
        // Logic opsibal update
        const updateDataTodo: Prisma.TodoUpdateInput = {};
        if (updateDataTodo.dueDate) {
            updateDataTodo.dueDate = updateTodoBody.dueDate
        }

        if (updateDataTodo.label) {
            updateDataTodo.label = updateTodoBody.label
        }
        return await this.databaseService.todo.update({
            where: {
                id: todoId
            },
            data: updateTodoBody
        })
    }

    async deleteTodo(todoId: number) {
        return await this.databaseService.todo.delete({
            where: {
                id: todoId
            }
        })
    }

    async findById(todoId: number) {
        return this.databaseService.todo.findUnique({
            where: {
                id: todoId
            }
        })
    }
}