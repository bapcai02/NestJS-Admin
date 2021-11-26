import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';
@Module({
    imports: [
        TypeOrmModule.forFeature([ProductRepository]),
        LogService,
        HelperModule,
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService],
})
export class ProductsModule {}
