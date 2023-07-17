import { type User } from '../../../../src/domain/models/User'
import { type SearchUsersUseCase } from '../../../../src/domain/ports/search_users'
import { UserMotherPattern } from '../mother-pattern/user-mother-pattern'

export class MockSearchAll implements SearchUsersUseCase {
  async execute (): Promise<User[]> {
    const data: User[] = UserMotherPattern.getArrayUsers()
    return await Promise.resolve(data)
  }
}
