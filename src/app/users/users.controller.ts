/* eslint-disable prettier/prettier */
import { Controller, Get, Put, Delete, Req, Res, Param, Render, Post , Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../../dto/users.create.dto';
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
    async getAll() {
      return this.usersService.getUser();
    }

  @Get(':id')
    getOne(@Param('id') id: number) {
      return this.usersService.findUser(id);
    }

  @Post()
    createUser( @Body() createUserDto: CreateUserDto) {
      return createUserDto;
    }

  @Put(':id')
    updateUser(@Param('id') id: string, @Body() body: any) {
      return body;
    }

  @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} cat`;
    }
}
