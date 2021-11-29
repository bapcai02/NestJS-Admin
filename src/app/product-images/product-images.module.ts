import { Module } from '@nestjs/common';
import { ProductImagesService } from './product-images.service';
import { ProductImagesController } from './product-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImageRepository } from './product-images.repository';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductImageRepository]),
    LogService,
    HelperModule,
  ],
  providers: [ProductImagesService],
  controllers: [ProductImagesController]
})
export class ProductImagesModule {}
