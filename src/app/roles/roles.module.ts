import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleRepository } from './roles.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleRepository]), 
    LogService,
    HelperModule,
  ],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService]
})
export class RolesModule {}
