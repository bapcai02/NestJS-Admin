import { Injectable } from '@nestjs/common';
import { Sellers } from '../../entity/seller.entity';
import { BaseService } from '../base.service';
import { SellerRepository } from './sellers.repository';

@Injectable()
export class SellersService extends BaseService<Sellers, SellerRepository> {
    constructor( protected readonly repository: SellerRepository) {
        super()
    }
}
