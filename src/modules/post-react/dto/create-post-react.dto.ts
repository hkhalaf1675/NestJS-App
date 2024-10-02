import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostReactDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    postId: number;

    @IsNotEmpty()
    @IsEnum(['like', 'love', 'wow', 'angry', 'sad'])
    reactType: string;
}
