import { type User } from '../models/User'
import { type CreateUserUseCase } from '../ports/create_user'
import { type UserRepository } from '../repositories/user_repository'

export class CreateUserOnRegister implements CreateUserUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute (user: User): Promise<void> {
    try {
      await this.userRepository.create(user)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
