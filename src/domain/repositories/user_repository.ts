import { type User } from '../models/User'

export interface UserRepository {
  searchAll (): Promise<User[]>
  create (user: User): Promise<void>
  searchById (id: string): Promise<User | null>
  update (user: User): Promise<void>
  delete (id: string): Promise<void>
}
