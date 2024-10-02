import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSaveListPostDto {
    @IsNotEmpty()
    @IsNumber()
    saveListId: number;

    @IsNotEmpty()
    @IsNumber()
    postId: number;
}
