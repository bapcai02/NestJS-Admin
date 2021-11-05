import { Global, Module } from '@nestjs/common'
import { BaseResponse } from './response.helper';

@Global()
@Module({
  imports: [],
  providers: [
    BaseResponse,
  ],
  exports: [
    BaseResponse,
  ],
})
export class HelperModule {
}