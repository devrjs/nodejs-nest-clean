import { Module } from '@nestjs/common'
import { GetHelloUseCase } from '../../domain/hello/use-cases/get-hello.js'
import { GetHelloController } from './controllers/app.controller.js'

@Module({
  controllers: [GetHelloController],
  providers: [GetHelloUseCase],
})
export class HttpModule {}
