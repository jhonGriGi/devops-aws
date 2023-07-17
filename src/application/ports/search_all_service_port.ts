import { type UserDto } from '../dto/user_dto'

export interface SearchAllServicePort {
  execute(): Promise<UserDto[]>
}
