import { GetHelloUseCase } from './get-hello.js'

describe('GetHelloUseCase', () => {
  it('should return "Hello World!"', async () => {
    const sut = new GetHelloUseCase()
    const result = await sut.execute()
    expect(result.isRight()).toBe(true)
    expect(result.value?.message).toBe('Hello World!')
  })
})
