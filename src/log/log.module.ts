import { Global, Module } from '@nestjs/common'
import { LogService } from './custom.log'

@Global()
@Module({
  providers: [LogService],
  exports: [LogService],
})
export class LoggerModule {
}