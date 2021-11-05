import { Injectable } from '@nestjs/common';
import { Users } from '../../entity/user.entity';
import { BaseService } from '../base.service';
import { UserRepository } from './user.repository';
@Injectable()
export class UsersService extends BaseService<Users, UserRepository> {
    constructor( protected readonly repository: UserRepository) {
        super()
    }

    async findByEmail(emails: string): Promise<Users>{
        return await this.repository.findOne({ email: emails });
    }

    async getRoleAll() {
        return await this.repository.getRoleAll();
    }

}
