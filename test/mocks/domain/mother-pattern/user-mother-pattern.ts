/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type User } from '../../../../src/domain/models/User'

export class UserMotherPattern {
  static users: User[] = [
    {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    },
    {
      id: '456',
      name: 'Mary Sue',
      email: 'marysue@gmail.com'
    }
  ]

  static getArrayUsers (): User[] {
    return this.users
  }

  static getUser (): User {
    return this.users[0]
  }

  static getNullUser (): null {
    return null
  }
}
