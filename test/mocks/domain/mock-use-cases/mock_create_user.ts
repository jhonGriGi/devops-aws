import { type User } from '../../../../src/domain/models/User'
import { type CreateUserUseCase } from '../../../../src/domain/ports/create_user'

export class MockCreateUser implements CreateUserUseCase {
  async execute (user: User): Promise<void> {
    throw new Error('Error no controlado')
  }
}
