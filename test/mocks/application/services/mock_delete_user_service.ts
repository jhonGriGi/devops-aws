import { type DeleteUserServicePort } from '../../../../src/application/ports/delete_user_service_port'

export class MockDeleteUserService implements DeleteUserServicePort {
  async execute (id: string): Promise<void> {
    throw new Error('Error no controlado')
  }
}
