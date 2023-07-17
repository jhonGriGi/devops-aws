import { type UserDto } from '../../../../src/application/dto/user_dto'
import { type SearchAllServicePort } from '../../../../src/application/ports/search_all_service_port'
import { UserDtoMotherPattern } from '../mother-pattern/userdto-mother-pattern'

export class MockSearchAllService implements SearchAllServicePort {
  async execute (): Promise<UserDto[]> {
    const data: UserDto[] = UserDtoMotherPattern.getArrayUsers()
    return await Promise.resolve(data)
  }
}
