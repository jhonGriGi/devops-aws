import { UpdateUser } from './../../../../src/domain/use_cases/update_user_use_case'
import { MockUserRepository } from '../../../mocks/infrastructure/mock_user_repository'
import { type User } from '../../../../src/domain/models/User'

describe('Update User use case test suit', () => {
  let userRepository: MockUserRepository
  let updateUser: UpdateUser

  beforeAll(() => {
    userRepository = new MockUserRepository()
    updateUser = new UpdateUser(userRepository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when updateUser is called', async () => {
    const user: User = {
      id: '321',
      name: 'Mary Sue',
      email: 'marysue@gmail.com'
    }
    const errorMessage = 'Error no controlado'
    jest.spyOn(userRepository, 'update').mockRejectedValue(new Error(errorMessage))

    await expect(updateUser.execute(user)).rejects.toThrowError(errorMessage)
  })
})
