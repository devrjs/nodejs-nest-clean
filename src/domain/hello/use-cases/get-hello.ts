import { Injectable } from '@nestjs/common'
import { type Either, right } from '../../../core/either.js'

// type GetHelloUseCaseRequest = {}
type GetHelloUseCaseResponse = Either<null, { message: string }>

@Injectable()
export class GetHelloUseCase {
  async execute(): Promise<GetHelloUseCaseResponse> {
    return right({ message: 'Hello World!' })
  }
}
