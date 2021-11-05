import { 
  IsEmail,
  IsNotEmpty,
  IsInt,
  Min,
  Max, 
  IsString,
  MinLength,
  MaxLength
} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(191)
    name: string;
    
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(4)
    role_id: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    password: string;
  }