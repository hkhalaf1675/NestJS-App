import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateUserDto } from "../../users/dto/create-user.dto";

export class CreateAdminDto extends CreateUserDto{
    @IsNotEmpty()
    @IsNumber()
    roleId: number;
}
