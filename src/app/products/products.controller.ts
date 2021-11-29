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
    UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from "@nestjs/platform-express";
import { BaseResponse } from '../../helper/response.helper';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/product.create.dto';
import { editFileName, imageFileFilter } from "../storage.config";
import { BrandsService } from '../brands/brands.service';
import { CategoriesService } from '../categories/categories.service';
import { ProductImagesService } from '../product-images/product-images.service';
@Controller('api/products')
export class ProductsController {
    constructor(
        protected readonly baseResponse: BaseResponse,
        protected readonly productsService: ProductsService,
        protected readonly brandsService: BrandsService,
        protected readonly categoriesService: CategoriesService,
        protected readonly productImagesService: ProductImagesService,
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
        async create(@Body() data: CreateProductDto, @UploadedFile() file) {
            try {
                const image = {
                    originalname: file.originalname,
                    filename: file.filename,
                };
                const brand = await this.brandsService.findById(data.brand_id);
                const category = await this.categoriesService.findById(data.category_id);

                if(!brand) {
                    return this.baseResponse.IBaseResponse(1, "brand does not exist !", []);
                }else if(!category) {
                    return this.baseResponse.IBaseResponse(1, "category do not exist !", []);
                }

                const product = await this.productsService.store(data);

                if(!product) {
                    return this.baseResponse.IBaseResponse(1, "error, please check again!", []);
                }

                await this.productImagesService.store({
                    "product_id" : product.id,
                    'image' : image.filename
                })

                return this.baseResponse.IBaseResponse(0, "successfully!", []);

            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    @Put(':id')
        async update(@Param('id') id: number, @Body() data: any) {
            try {
                const product = await this.productsService.findById(id);
                if(!product) {
                    return this.baseResponse.IBaseResponse(1, "product data not exist !", []);
                }
                const brand = await this.brandsService.findById(data.brand_id);
                const category = await this.categoriesService.findById(data.category_id);

                if(!brand) {
                    return this.baseResponse.IBaseResponse(1, "brand does not exist !", []);
                }else if(!category) {
                    return this.baseResponse.IBaseResponse(1, "category do not exist !", []);
                }

                await this.productsService.update(id, data);

                return this.baseResponse.IBaseResponse(0, "successfully!", []);
                
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    @Delete(':id')
        async delete(@Param('id') id: number) {
            try {
                const product = await this.productsService.findById(id);
                if(!product) {
                    return this.baseResponse.IBaseResponse(1, "product data not exist !", []);
                }

                await this.productsService.delete(id);
                return this.baseResponse.IBaseResponse(0, "successfully!", []);
                
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
}
