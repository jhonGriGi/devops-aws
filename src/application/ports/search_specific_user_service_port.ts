import { type UserDto } from '../dto/user_dto'

export interface SearchSpecificUserServicePort {
  execute(id: string): Promise<UserDto | null>
}
