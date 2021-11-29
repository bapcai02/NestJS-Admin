import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandRepository } from './brands.repository';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';
@Module({
  imports: [
      TypeOrmModule.forFeature([BrandRepository]),
      LogService,
      HelperModule,
  ],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
