import { IsDateString, IsOptional, IsString, MaxLength } from "class-validator";
import { CreateTodoDto } from "./create-todo.dto.js";
import { Transform } from "class-transformer";

export class UpdateTodoDto implements Partial<CreateTodoDto> {
    @IsString()
    @MaxLength(20)
    @IsOptional()
    label: string

    @IsDateString()
    @IsOptional()
    @Transform(({ value }) => {
        return new Date(value).toISOString();
    })
    @IsOptional()
    dueDate?: Date;
}