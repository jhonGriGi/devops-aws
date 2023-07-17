import { type User } from '../models/User'
import { type SearchByIdUseCase } from '../ports/search_by_id'
import { type UserRepository } from '../repositories/user_repository'

export class SearchSpecificUser implements SearchByIdUseCase {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute (id: string): Promise<User | null> {
    try {
      return await this.userRepository.searchById(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
