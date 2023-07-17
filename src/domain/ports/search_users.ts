import { type User } from '../models/User'

export interface SearchUsersUseCase {
  execute (): Promise<User[]>
}
