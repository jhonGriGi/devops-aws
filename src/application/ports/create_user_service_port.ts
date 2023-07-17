import { type UserDto } from '../dto/user_dto'

export interface CreateUserServicePort {
  execute(userDto: UserDto): Promise<void>
}
