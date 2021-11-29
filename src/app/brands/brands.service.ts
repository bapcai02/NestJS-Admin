import { Injectable } from '@nestjs/common';
import { Brands } from '../../entity/brand.entity';
import { BaseService } from '../base.service';
import { BrandRepository } from './brands.repository';
@Injectable()
export class BrandsService extends BaseService<Brands, BrandRepository> {
    constructor( protected readonly repository: BrandRepository) {
        super()
    }
}
