import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    token: string;

    @IsNotEmpty()
    name: string;
}
