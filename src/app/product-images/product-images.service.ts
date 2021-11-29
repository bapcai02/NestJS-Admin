import { Injectable } from '@nestjs/common';
import { ProductImages } from '../../entity/productImages.entity';
import { BaseService } from '../base.service';
import { ProductImageRepository } from './product-images.repository';

@Injectable()
export class ProductImagesService extends BaseService<ProductImages, ProductImageRepository> {
    constructor( protected readonly repository: ProductImageRepository) {
        super()
    }
}
