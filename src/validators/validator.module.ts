import { Global, Module } from '@nestjs/common'
import { UniqueEmailValidator } from './unique-email.validator'

@Global()
@Module({
  imports: [],
  providers: [
    UniqueEmailValidator,
  ],
  exports: [
    UniqueEmailValidator,
  ],
})
export class ValidatorModule {
}