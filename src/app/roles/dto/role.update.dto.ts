import { 
    IsOptional, 
    IsInt, 
    Min, 
    Max, 
    IsString, 
    MinLength,
    MaxLength
} from "class-validator";
  
export class UpdateRolesDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(191)
    status: number;
    
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(191)
    display_name: string;
  }