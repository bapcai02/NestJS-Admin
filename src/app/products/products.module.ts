import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { BrandsService } from '../brands/brands.service';
import { BrandsModule } from '../brands/brands.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';
import { BrandRepository } from '../brands/brands.repository';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';
import { CategoriesService } from '../categories/categories.service';
import { CategoriesModule } from '../categories/categories.module';
import { CategoryRepository } from '../categories/categories.repository';
import { SellerRepository } from '../sellers/sellers.repository';
import { SellersService } from '../sellers/sellers.service';
import { SellersModule } from '../sellers/sellers.module';
import { ProductImagesService } from '../product-images/product-images.service';
import { ProductImagesModule } from '../product-images/product-images.module';
import { ProductImageRepository } from '../product-images/product-images.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ProductRepository, 
            BrandRepository, 
            CategoryRepository, 
            SellerRepository,
            ProductImageRepository,
        ]),
        LogService,
        HelperModule,
        BrandsModule,
        CategoriesModule,
        SellersModule,
        ProductImagesModule,
    ],
    controllers: [ProductsController],
    providers: [
        ProductsService, 
        BrandsService, 
        CategoriesService, 
        SellersService,
        ProductImagesService,
    ],
    exports: [ProductsService],
})
export class ProductsModule {}
