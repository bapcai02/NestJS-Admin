import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { LogService } from '../../log/custom.log';
import { RolesModule } from '../roles/roles.module';
import { HelperModule } from '../../helper/helper.module';
@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
        LogService,
        HelperModule,
        RolesModule,
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
