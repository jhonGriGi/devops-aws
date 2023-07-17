import { type User } from '../models/User'

export interface CreateUserUseCase {
  execute (user: User): Promise<void>
}
