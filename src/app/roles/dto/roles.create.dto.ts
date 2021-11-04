import { 
    IsNotEmpty, 
    IsInt, 
    Min, 
    Max, 
    IsString, 
    MinLength,
    MaxLength
} from "class-validator";
  
export class CreateRolesDto {
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(191)
    status: number;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(191)
    display_name: string;
  }