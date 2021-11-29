import { 
  EntityRepository,
  Repository,
} from 'typeorm';
import { Sellers } from '../../entity/seller.entity';

@EntityRepository(Sellers)
export class SellerRepository extends Repository<Sellers> {
}