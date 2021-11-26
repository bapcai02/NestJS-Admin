import { Injectable } from '@nestjs/common';
import { Products } from '../../entity/products.entity';
import { BaseService } from '../base.service';
import { ProductRepository } from './products.repository';
@Injectable()
export class ProductsService extends BaseService<Products, ProductRepository> {
    constructor( protected readonly repository: ProductRepository) {
        super()
    }
}
