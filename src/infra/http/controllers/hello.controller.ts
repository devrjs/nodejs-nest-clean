import { Controller, Get } from '@nestjs/common'
import { GetHelloUseCase } from '../../../domain/hello/use-cases/get-hello.js'

@Controller()
export class GetHelloController {
  constructor(private readonly getHelloUseCase: GetHelloUseCase) {}

  @Get()
  async handle() {
    const result = await this.getHelloUseCase.execute()
    return result.value?.message
  }
}
