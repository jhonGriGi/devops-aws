/* eslint-disable @typescript-eslint/no-extraneous-class */
import { type UserDto } from '../../../../src/application/dto/user_dto'

export class UserDtoMotherPattern {
  static users: UserDto[] = [
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

  static getArrayUsers (): UserDto[] {
    return this.users
  }

  static getUser (): UserDto {
    return this.users[0]
  }

  static getNullUser (): null {
    return null
  }
}
