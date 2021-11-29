import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from '../../log/custom.log';
import { HelperModule } from '../../helper/helper.module';
import { SellerRepository } from './sellers.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SellerRepository]),
    LogService,
    HelperModule
],
  providers: [SellersService],
  controllers: [SellersController]
})
export class SellersModule {}
