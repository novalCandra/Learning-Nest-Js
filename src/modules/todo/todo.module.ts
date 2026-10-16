import { Module } from '@nestjs/common';
import { TodoService } from './todo.service.js';
import { TodoController } from './todo.controller.js';
import { DatabaseModule } from '../../infrastructure/database/database.module.js';
import { TodoRepository } from './todo.repository.js';

@Module({
    providers: [TodoService, TodoRepository],
    exports: [TodoService],
    controllers: [TodoController],
    imports: [DatabaseModule]
})
export class TodoModule { }
