import { 
  EntityRepository,
  getConnection,
  Repository
} from 'typeorm';
import { Users } from '../../entity/user.entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
    async getRoleAll() {
      const userRole = await getConnection()
                      .getRepository(Users)
                      .createQueryBuilder("user")
                      .innerJoinAndSelect("user.role_id", "roles")
                      .getMany()
      return userRole;
  }
}