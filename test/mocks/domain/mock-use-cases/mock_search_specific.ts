import { type User } from '../../../../src/domain/models/User'
import { type SearchByIdUseCase } from '../../../../src/domain/ports/search_by_id'
import { UserMotherPattern } from '../mother-pattern/user-mother-pattern'

export class MockSearchSpecificUser implements SearchByIdUseCase {
  async execute (id: string): Promise<User | null> {
    const user = UserMotherPattern.getUser()

    if (id === '0') {
      return null
    }

    return user
  }
}
