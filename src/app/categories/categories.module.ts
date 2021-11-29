import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './categories.repository';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository]),
    LogService,
    HelperModule,
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
