/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsInt, Min, Max } from "class-validator";
export class CreateUserDto {

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(4)
    role_id: number;

    @IsNotEmpty()
    @Min(1)
    @Max(191)
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Min(5)
    @Max(20)
    password: string;
  }