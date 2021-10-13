import { Module } from '@nestjs/common';
import { TinhtpController } from './tinhtp.controller';
import { TinhtpService } from './tinhtp.service';

@Module({
  controllers: [TinhtpController],
  providers: [TinhtpService],
})
export class TinhtpModule {}
