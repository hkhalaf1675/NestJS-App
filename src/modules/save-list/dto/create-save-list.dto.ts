import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSaveListDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    name: string;
}
