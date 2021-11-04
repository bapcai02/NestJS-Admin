import { EntityRepository, Repository } from 'typeorm'
import { Roles } from '../../entity/role.entity';

@EntityRepository(Roles)
export class RoleRepository extends Repository<Roles> {

}