/* eslint-disable prettier/prettier */
import { Controller, Get, Req, Param, Render } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../../entity/user.entity';
import { Request } from 'express';
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('index')
    getAll() {
      return { message: 'Hello world!' };
      // return this.usersService.getUser();
    }
  @Get(':id')
    getOne(@Param('id') id: number) {
      return this.usersService.findUser(id);
    }
}
