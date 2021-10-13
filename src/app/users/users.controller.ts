/* eslint-disable prettier/prettier */
import { Controller, Get, Req, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../../entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
    getAll(): Promise<Users[]> {
      return this.usersService.getAll();
    }
  @Get(':id')
    getOne(@Param('id') id: number): Promise<Users> {
      return this.usersService.findOne(id);
    }
}
