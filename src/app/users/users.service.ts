import { Injectable } from '@nestjs/common';
import { Users } from '../../entity/user.entity';
import { BaseService } from '../base.service';
import { UserRepository } from './user.repository';
import { LogService } from '../../log/custom.log';
@Injectable()
export class UsersService extends BaseService<Users, UserRepository> {
    constructor(repository: UserRepository, logger: LogService) {
        super(repository, logger)
    }
   
    async getUser(): Promise<Users[]>{
        return await this.repository.find();
    }

    async findUser(id: number): Promise<Users> {
        return await this.repository.findOne(id);
    }
    async createUser(data: any): Promise<Users> {
        return await this.repository.save(data);
    }
    async updateUser(id: number, data: any): Promise<Users> {
        await this.repository.save(id, data);
        return this.findUser(id);
    }
    async deleteUser(id: number): Promise<Users> {
        return this.repository.delete(id);
    }
}
