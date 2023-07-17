import { type User } from '../models/User'

export interface SearchByIdUseCase {
  execute (id: string): Promise<User | null>
}
