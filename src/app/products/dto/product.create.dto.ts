import { 
    IsNotEmpty,
    IsInt,
    IsString,
    MaxLength
  } from "class-validator";
  
export class CreateProductDto {
    @IsNotEmpty()
    @IsInt()
    category_id : number;
    
    @IsNotEmpty()
    @IsInt()
    brand_id: number;

    @IsNotEmpty()
    @IsInt()
    seller_id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    product_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    slug: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    product_desc: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    product_content: string;

    @IsNotEmpty()
    product_price: number;

    @IsNotEmpty()
    sale: number;

    @IsNotEmpty()
    product_status: number;
}