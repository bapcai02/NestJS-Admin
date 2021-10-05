/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<Users[]> {
    return this.usersService.getUser();
  }
}
