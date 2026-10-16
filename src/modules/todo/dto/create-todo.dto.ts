import { Transform, Type } from "class-transformer";
import { IsDateString, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTodoDto {
    id: number;
    @IsString()
    @MaxLength(20)
    label: string;
            
    @IsDateString()
    @Transform(({value}) => {
        return new Date(value).toISOString();
    })
    @IsOptional()
    @Type(() => Date)
    dueDate?: Date;
}