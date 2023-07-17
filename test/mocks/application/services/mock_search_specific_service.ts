import { type UserDto } from '../../../../src/application/dto/user_dto'
import { type SearchSpecificUserServicePort } from '../../../../src/application/ports/search_specific_user_service_port'
import { UserDtoMotherPattern } from '../mother-pattern/userdto-mother-pattern'

export class MockSearchSpecificUser implements SearchSpecificUserServicePort {
  async execute (id?: string): Promise<UserDto | null> {
    const user = UserDtoMotherPattern.getUser()

    if (id === '0') {
      return null
    }

    return user
  }
}
