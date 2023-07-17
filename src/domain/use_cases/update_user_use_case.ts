import { type User } from '../models/User'
import { type UpdateUserUseCase } from '../ports/update_user'
import { type UserRepository } from '../repositories/user_repository'

export class UpdateUser implements UpdateUserUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute (user: User): Promise<void> {
    try {
      await this.userRepository.update(user)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
