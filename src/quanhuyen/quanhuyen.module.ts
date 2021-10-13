import { Module } from '@nestjs/common';
import { QuanhuyenService } from './quanhuyen.service';
import { QuanhuyenController } from './quanhuyen.controller';

@Module({
  providers: [QuanhuyenService],
  controllers: [QuanhuyenController]
})
export class QuanhuyenModule {}
