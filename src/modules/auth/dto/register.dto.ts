import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length } from "class-validator";
import { UserRole } from "src/modules/user/dto/create-user.dto";

export class RegisterDto {
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
}
