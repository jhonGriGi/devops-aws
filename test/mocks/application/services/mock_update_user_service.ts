import { type UserDto } from '../../../../src/application/dto/user_dto'
import { type UpdateUserServicePort } from '../../../../src/application/ports/update_user_service_port'

export class MockUpdateUserService implements UpdateUserServicePort {
  async execute (userDto: UserDto): Promise<void> {
    throw new Error('Error no controlado')
  }
}
