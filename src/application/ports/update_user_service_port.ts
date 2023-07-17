import { type UserDto } from '../dto/user_dto'

export interface UpdateUserServicePort {
  execute(userDto: UserDto): Promise<void>
}
