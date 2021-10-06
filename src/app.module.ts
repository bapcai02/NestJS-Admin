import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { TagsModule } from './tags/tags.module';
import { SocialsModule } from './socials/socials.module';
import { SlidersModule } from './sliders/sliders.module';
import { SellersModule } from './sellers/sellers.module';
import { RolesModule } from './roles/roles.module';
import { RatingsModule } from './ratings/ratings.module';
import { ProductTagsModule } from './product-tags/product-tags.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { EmployerModule } from './employer/employer.module';
import { CustomersModule } from './customers/customers.module';
import { CouponsModule } from './coupons/coupons.module';
import { CategoriesModule } from './categories/categories.module';
import { CartsModule } from './carts/carts.module';
import { BrandsModule } from './brands/brands.module';
import { QuanhuyenModule } from './quanhuyen/quanhuyen.module';
import { TinhtpModule } from './tinhtp/tinhtp.module';
import { XaphuongttrModule } from './xaphuongttr/xaphuongttr.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shopb2c',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
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
    ProductModule,
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
