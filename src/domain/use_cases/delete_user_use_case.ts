import { type DeleteUserUseCase } from '../ports/delete_user'
import { type UserRepository } from '../repositories/user_repository'

export class DeleteUser implements DeleteUserUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute (id: string): Promise<void> {
    try {
      await this.userRepository.delete(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
