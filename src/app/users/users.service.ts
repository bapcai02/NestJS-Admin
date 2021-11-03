/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../entity/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
    ){ }
   
    async getUser(): Promise<Users[]>{
        return await this.userRepository.find();
    }

    async findUser(id: number): Promise<Users> {
        return await this.userRepository.findOne(id);
    }
}
