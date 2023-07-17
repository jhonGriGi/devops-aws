import { type DeleteUserUseCase } from '../../domain/ports/delete_user'
import { type DeleteUserServicePort } from '../ports/delete_user_service_port'

export class DeleteUserService implements DeleteUserServicePort {
  private readonly userUseCase: DeleteUserUseCase

  constructor (userUseCase: DeleteUserUseCase) {
    this.userUseCase = userUseCase
  }

  async execute (id: string): Promise<void> {
    try {
      await this.userUseCase.execute(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
