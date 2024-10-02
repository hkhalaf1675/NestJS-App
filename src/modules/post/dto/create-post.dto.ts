import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number;
}
