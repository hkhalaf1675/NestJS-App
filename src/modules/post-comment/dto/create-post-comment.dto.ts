import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostCommentDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    postId: number;

    @IsNotEmpty()
    comment: string;
}
