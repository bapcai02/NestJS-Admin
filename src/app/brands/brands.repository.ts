import { HttpException, HttpStatus } from '@nestjs/common';
import { 
  EntityRepository,
  Repository,
} from 'typeorm';
import { Brands } from '../../entity/brand.entity';

@EntityRepository(Brands)
export class BrandRepository extends Repository<Brands> {
  
}