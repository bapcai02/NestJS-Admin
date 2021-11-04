import { Injectable } from '@nestjs/common';
import { Users } from '../../entity/user.entity';
import { BaseService } from '../base.service';
import { UserRepository } from './user.repository';
import { LogService } from '../../log/custom.log';
import { DeleteResult } from 'typeorm';
@Injectable()
export class UsersService extends BaseService<Users, UserRepository> {
    constructor( protected readonly repository: UserRepository) {
        super()
    }
    async findByEmail(emails: string): Promise<Users>{
        return await this.repository.findOne({ email: emails });
    }
}
