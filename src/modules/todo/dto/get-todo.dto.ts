import { Transform } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetTodosDto {
    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => {
        return value === 'true';
    })
    overdue: boolean
}