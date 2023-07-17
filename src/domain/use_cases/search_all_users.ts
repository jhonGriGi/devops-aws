import { type User } from '../models/User'
import { type SearchUsersUseCase } from '../ports/search_users'
import { type UserRepository } from '../repositories/user_repository'

export class SearchAllUsers implements SearchUsersUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute (): Promise<User[]> {
    try {
      return await this.userRepository.searchAll()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
