import { HttpException, HttpStatus } from '@nestjs/common';
import { 
  EntityRepository,
  Repository,
} from 'typeorm';
import { Categories } from '../../entity/category.entity';

@EntityRepository(Categories)
export class CategoryRepository extends Repository<Categories> {
  
}