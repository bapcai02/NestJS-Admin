import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { BaseResponse } from '../../helper/response.helper';
import { UpdateRolesDto } from './dto/role.update.dto';
import { CreateRolesDto } from './dto/roles.create.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(
        protected readonly rolesService: RolesService,
        protected readonly baseResponse: BaseResponse,
    ) {}

    @Get() 
        async getAll() {
            try {
                const response = this.baseResponse.IBaseResponse(1, "success!", await this.rolesService.index());
                return response;
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    
    @Post() 
        async create(@Body() request: CreateRolesDto) {
            try {
                const role = await this.rolesService.findByName(request.display_name);
                let response = null;
                if(role) {
                    response = this.baseResponse.IBaseResponse(1, "Role name already exists!", []);
                }else {
                    response = this.baseResponse.IBaseResponse(0, "successfully create!", await this.rolesService.store(request));
                }
               
                return response;
            } catch (error) {
                throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    
    @Put(':id')
        async update(@Param('id') id: number, @Body() request: UpdateRolesDto){
            try {
                const roleID = await this.rolesService.findById(id);
                if (!roleID) {
                    const response = this.baseResponse.IBaseResponse(0, "Role not already exists!", []);
                    return response;
                }

                const roleName = await this.rolesService.findByName(request.display_name);
                if (roleName) {
                    const response = this.baseResponse.IBaseResponse(0, "Role Name already exists!", []);
                    return response;
                }

                const response = this.baseResponse.IBaseResponse(1, "Create Successfully!", await this.rolesService.store(request));
                return response;
            } catch (error) {
                
            }
        }

    @Delete(':id')
        async delete(id: string) {
            const role = this.rolesService.findById(id);
            let response = null;
            if (!role) {
                response = this.baseResponse.IBaseResponse(0, "Role not already exists!", []);
            } else {
                response = this.baseResponse.IBaseResponse(1, "Delete Successfully!", await this.rolesService.delete(id))
            }
            return response;
        }
}
