import { type User } from '../models/User'

export interface UpdateUserUseCase {
  execute (user: User): Promise<void>
}
