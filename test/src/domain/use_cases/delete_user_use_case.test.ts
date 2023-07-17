import { DeleteUser } from './../../../../src/domain/use_cases/delete_user_use_case'
import { MockUserRepository } from '../../../mocks/infrastructure/mock_user_repository'

describe('Delete user use case', () => {
  let userRepository: MockUserRepository
  let deleteUseCase: DeleteUser

  beforeAll(() => {
    userRepository = new MockUserRepository()
    deleteUseCase = new DeleteUser(userRepository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when deleteUser is called', async () => {
    const id = '123'
    const errorMessage = 'Error no controlado'
    jest.spyOn(userRepository, 'delete').mockRejectedValue(new Error(errorMessage))

    await expect(deleteUseCase.execute(id)).rejects.toThrowError(errorMessage)
  })
})
