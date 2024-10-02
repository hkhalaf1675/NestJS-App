import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length } from "class-validator";

export enum UserRole{
    AUTHOR = "author",
    GUEST = "guest"
}

export class CreateUserDto {
    @Length(3, 100)
    @IsNotEmpty()
    name: string;

    @Length(3, 100)
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(8, 100)
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRole)
    @IsNotEmpty()
    role: string;

    @IsOptional()
    phone: string;

    @IsOptional()
    country: string;

    @IsOptional()
    @IsDate()
    birthDate: Date;
}
