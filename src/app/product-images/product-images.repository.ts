import { HttpException, HttpStatus } from '@nestjs/common';
import { 
  EntityRepository,
  Repository,
} from 'typeorm';
import { ProductImages } from '../../entity/productImages.entity';

@EntityRepository(ProductImages)
export class ProductImageRepository extends Repository<ProductImages> {
    
}