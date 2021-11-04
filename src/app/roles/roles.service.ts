import { Injectable } from '@nestjs/common';
import { Roles } from 'src/entity/role.entity';
import { BaseService } from '../base.service';
import { RoleRepository } from './roles.repository';
@Injectable()
export class RolesService extends BaseService<Roles, RoleRepository> {
    constructor( protected readonly repository: RoleRepository) {
        super()
    }
    async findByName(name: string) {
        return await this.repository.findOne({display_name: name});
    }
}
