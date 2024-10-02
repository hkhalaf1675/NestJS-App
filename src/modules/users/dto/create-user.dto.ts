import { IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Length(3, 50)
    @IsOptional()
    fullName: string;

    @IsNotEmpty()
    @Length(8, 50)
    password: string;

    @IsOptional()
    country: string;

    @IsOptional()
    phone: string;
}
