import { UserMapper } from '../../../src/application/mapper/user_mapper'

describe('User mapper test suit', () => {
  test('Should map from dto to model', () => {
    const userMapper = new UserMapper()
    const user = {
      id: '123',
      name: 'John Doe',
      email: 'johnDoe@gmail.com'
    }
    jest.spyOn(userMapper, 'fromDtoToModel').mockReturnValue(user)

    expect(userMapper.fromDtoToModel(user)).toEqual(user)
  })
})
