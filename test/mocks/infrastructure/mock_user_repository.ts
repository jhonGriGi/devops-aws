import { type User } from '../../../src/domain/models/User'
import { type UserRepository } from '../../../src/domain/repositories/user_repository'
import { UserMotherPattern } from '../domain/mother-pattern/user-mother-pattern'

export class MockUserRepository implements UserRepository {
  private readonly userData: User[] = UserMotherPattern.getArrayUsers()

  async searchAll (): Promise<User[]> {
    try {
      return await Promise.resolve(this.userData)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async create (user: User): Promise<void> {
    try {
      await Promise.resolve(this.userData.push(user))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async searchById (id: string): Promise<User | null> {
    try {
      const userFound = await Promise.resolve(this.userData.filter((user) => user.id === id))
      return userFound[0]
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async update (user: User): Promise<void> {
    try {
      const userFound = await Promise.resolve(this.userData.filter((updateUser) => updateUser.id === user.id))
      userFound[0].email = user.email
      userFound[0].name = user.name
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async delete (id: string): Promise<void> {
    try {
      await Promise.resolve(this.userData.filter((user) => user.id !== id))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
