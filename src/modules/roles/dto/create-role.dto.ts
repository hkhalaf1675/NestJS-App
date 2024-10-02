import { IsNotEmpty } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty()
    token: string;

    @IsNotEmpty()
    name: string;
}
