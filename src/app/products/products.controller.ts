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
    Req
} from '@nestjs/common';
import { BaseResponse } from '../../helper/response.helper';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
    constructor(
        protected readonly baseResponse: BaseResponse,
        protected readonly productsService: ProductsService
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
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
}
