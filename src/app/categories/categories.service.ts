import { Injectable } from '@nestjs/common';
import { Categories } from '../../entity/category.entity';
import { BaseService } from '../base.service';
import { CategoryRepository } from './categories.repository';

@Injectable()
export class CategoriesService extends BaseService<Categories, CategoryRepository> {
    constructor( protected readonly repository: CategoryRepository) {
        super()
    }
}
