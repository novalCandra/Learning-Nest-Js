import { CreateTodoDto } from "./create-todo.dto.js";

export class UpdateTodoDto implements Partial<CreateTodoDto>{
    label : string
}