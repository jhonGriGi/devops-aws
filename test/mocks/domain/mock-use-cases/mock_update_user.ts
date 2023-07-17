import { type User } from '../../../../src/domain/models/User'
import { type UpdateUserUseCase } from '../../../../src/domain/ports/update_user'

export class MockUpdateUser implements UpdateUserUseCase {
  async execute (user: User): Promise<void> {
    throw new Error('Error no controlado')
  }
}
