import { Module } from '@nestjs/common';
import { TodoService } from './todo.service.js';
import { TodoController } from './todo.controller.js';

@Module({
    providers: [TodoService],
    exports: [TodoService],
    controllers : [TodoController]
})
export class TodoModule { }
