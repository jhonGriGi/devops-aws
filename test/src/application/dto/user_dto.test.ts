import { UserDto } from '../../../../src/application/dto/user_dto'

describe('User dto test suit', () => {
  test('Should be defined', () => {
    const userDto = new UserDto('123', 'John Doe', 'johndoe@gmail.com')

    expect(userDto).toBeDefined()
  })
})
