import { EntityRepository, Repository } from 'typeorm'
import { Users } from '../../entity/user.entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  // getInactiveUsers(): Promise<Users[]> {
  //   return this.createQueryBuilder()
  //     .getMany()
  // }
}