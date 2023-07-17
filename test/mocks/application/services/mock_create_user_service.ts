import { type UserDto } from '../../../../src/application/dto/user_dto'
import { type CreateUserServicePort } from '../../../../src/application/ports/create_user_service_port'

export class MockCreateUserService implements CreateUserServicePort {
  async execute (userDto: UserDto): Promise<void> {
    throw new Error('Error no controlado')
  }
}
