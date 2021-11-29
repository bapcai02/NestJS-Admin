import { 
    Controller,
    Get,
    Put,
    Delete,
    Param,
    Post,
    Body,
    HttpException,
    HttpStatus,
    Req,
    UseInterceptors,
    UploadedFile
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from "@nestjs/platform-express";
import { BaseResponse } from '../../helper/response.helper';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/product.create.dto';
import { editFileName, imageFileFilter } from "../storage.config";
import { BrandsService } from '../brands/brands.service';
import { CategoriesService } from '../categories/categories.service';

@Controller('api/products')
export class ProductsController {
    constructor(
        protected readonly baseResponse: BaseResponse,
        protected readonly productsService: ProductsService,
        protected readonly brandsService: BrandsService,
        protected readonly categoriesService: CategoriesService,
    ) {}

    @Get()
        async get() {
            try {
                const response = this.baseResponse.IBaseResponse(0, "successfully!", await this.productsService.index());
                return response;
            }catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    @Get(':id') 
        async find(@Param('id') id: number) {
            try {
                const response = this.baseResponse.IBaseResponse(0, "successfully!", await this.productsService.findById(id));
                return response;
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    @Post('create')
        @UseInterceptors(
            FileInterceptor('image', {
                storage: diskStorage({
                  destination: './public/upload/image',
                  filename: editFileName,
                }),
                fileFilter: imageFileFilter,
              }),
        )
        async create(@Body() data: any, @UploadedFile() file) {
            try {
                // const response = {
                //     originalname: file.originalname,
                //     filename: file.filename,
                // };
                const brand = await this.brandsService.findById(data.brand_id);
                const category = await this.categoriesService.findById(data.category_id);
                return {brand, category};
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
}
