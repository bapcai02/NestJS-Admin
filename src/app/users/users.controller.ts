import { Controller, Get, Put, Delete, Param, Post , Body, HttpException, HttpStatus} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.create.dto';
import { UpdateUserDto } from './dto/users.update.dto';
import { IBaseResponse } from '../../helper/response.helper';
import * as bcrypt from 'bcrypt'
@Controller('users')
export class UsersController {
  constructor(protected readonly usersService: UsersService) {}

  @Get()
      async getAll() {
        try {
          const response = IBaseResponse(0, "successfully!", await this.usersService.index());
          return response;
        }catch (error) {
          throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
  
  @Get(':id')
    async getOne(@Param('id') id: number) {
      try {
        const response = IBaseResponse(0, "successfully!", await this.usersService.findById(id));
        return response;
      }catch (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

  @Post()
    async createUser( @Body() createUserDto: CreateUserDto) {
      try {
        const user = await this.usersService.findByEmail(createUserDto.email);
        if (user) {
          const response =  IBaseResponse(1, "Email already exists!", [])
          return response;
        }
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        // const isPasswordMatching = await bcrypt.compare(passwordInPlaintext, hashedPassword);
        const response = IBaseResponse(0, "Create Successfully!", this.usersService.store(createUserDto));
        return response;
      } catch (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

  @Put(':id')
    async updateUser(@Param('id') id: number, @Body() request: UpdateUserDto) {
      try {
        if(request.email){
          const user = await this.usersService.findByEmail(request.email);
          if (user) {
              const response =  IBaseResponse(1, "Email already exists!", [])
              return response;
          }
        }
        const response = IBaseResponse(0, "Update Successful!", this.usersService.update(id, request));
        return response;
      } catch (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

  @Delete(':id')
    async remove(@Param('id') id: number) {
      try {
        const user = await this.usersService.findById(id);
        if (!user) {
          const response =  IBaseResponse(1, "Account does not exist!", []);
          return response;
        }
        const response = IBaseResponse(0, "Account deleted successfully!", this.usersService.delete(id));
        return response;
      }catch (error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
}
