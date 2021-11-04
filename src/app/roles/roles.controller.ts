import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateRolesDto } from './dto/roles.create.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(protected readonly rolesService: RolesService) {}

    @Get() 
        async getAll() {
            try {
                return this.rolesService.index();
            }catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    
    @Post() 
        async create(@Body() request: CreateRolesDto) {
            try {
               if(request.display_name) {
                   return 
               } 
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
}
