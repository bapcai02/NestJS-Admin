import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { IBaseResponse } from 'src/helper/response.helper';
import { CreateRolesDto } from './dto/roles.create.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(protected readonly rolesService: RolesService) {}

    @Get() 
        async getAll() {
            try {
                const response = IBaseResponse(0, "success!", await this.rolesService.index());
                return response;
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    
    @Post() 
        async create(@Body() request: CreateRolesDto) {
            try {
                const role = await this.rolesService.findByName(request.display_name);
                console.log(request);
                let response = null;
                if(role) {
                    response = IBaseResponse(0, "Role name already exists!", []);
                }else {
                    response = IBaseResponse(0, "successfully create!", this.rolesService.store(request));
                }
               
                return response;
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
}
