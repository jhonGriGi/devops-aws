import { type DeleteUserUseCase } from '../../../../src/domain/ports/delete_user'

export class MockDeleteUser implements DeleteUserUseCase {
  async execute (id: string): Promise<void> {
    throw new Error('Error no controlado')
  }
}
