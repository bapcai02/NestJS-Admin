import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { TagsModule } from './app/tags/tags.module';
import { SocialsModule } from './app/socials/socials.module';
import { SlidersModule } from './app/sliders/sliders.module';
import { SellersModule } from './app/sellers/sellers.module';
import { RolesModule } from './app/roles/roles.module';
import { RatingsModule } from './app/ratings/ratings.module';
import { ProductTagsModule } from './app/product-tags/product-tags.module';
import { ProductImagesModule } from './app/product-images/product-images.module';
import { OrdersModule } from './app/orders/orders.module';
import { OrderDetailsModule } from './app/order-details/order-details.module';
import { EmployerModule } from './app/employer/employer.module';
import { CustomersModule } from './app/customers/customers.module';
import { CouponsModule } from './app/coupons/coupons.module';
import { CategoriesModule } from './app/categories/categories.module';
import { CartsModule } from './app/carts/carts.module';
import { BrandsModule } from './app/brands/brands.module';
import { QuanhuyenModule } from './app/quanhuyen/quanhuyen.module';
import { TinhtpModule } from './app/tinhtp/tinhtp.module';
import { XaphuongttrModule } from './app/xaphuongttr/xaphuongttr.module';
import { ProductsService } from './app/products/products.service';
import { ProductsController } from './app/products/products.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysql',
      password: 'mysql',
      database: 'shopb2c',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    // eslint-disable-next-line prettier/prettier
    UsersModule,
    TagsModule,
    SocialsModule,
    SlidersModule,
    SellersModule,
    RolesModule,
    RatingsModule,
    ProductTagsModule,
    ProductImagesModule,
    OrdersModule,
    OrderDetailsModule,
    EmployerModule,
    CustomersModule,
    CouponsModule,
    CategoriesModule,
    CartsModule,
    BrandsModule,
    QuanhuyenModule,
    TinhtpModule,
    XaphuongttrModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
