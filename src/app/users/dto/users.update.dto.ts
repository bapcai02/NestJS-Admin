import { 
  IsEmail, 
  IsOptional, 
  IsInt, 
  Min, 
  Max, 
  IsString, 
  MinLength,
  MaxLength
} from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(191)
    name: string;
    
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(4)
    role_id: number;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    password: string;
}