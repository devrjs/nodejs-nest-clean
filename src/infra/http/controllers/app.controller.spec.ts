import { Test, type TestingModule } from '@nestjs/testing'
import { GetHelloUseCase } from '../../../domain/hello/use-cases/get-hello.js'
import { GetHelloController } from './app.controller.js'

describe('GetHelloController', () => {
  let getHelloController: GetHelloController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloController],
      providers: [GetHelloUseCase],
    }).compile()

    getHelloController = app.get<GetHelloController>(GetHelloController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(getHelloController.handle()).toBe('Hello World!')
    })
  })
})
