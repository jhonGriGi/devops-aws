import { DeleteUserService } from '../../../../src/application/services/delete_user_service'
import { MockDeleteUser } from '../../../mocks/domain/mock-use-cases/mock_delete_user'

describe('Delete User service test suit', () => {
  let userService: DeleteUserService
  let userUseCase: MockDeleteUser

  beforeAll(() => {
    userUseCase = new MockDeleteUser()
    userService = new DeleteUserService(userUseCase)
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userUseCase, 'execute').mockRejectedValue(new Error(errorMessage))

    await expect(userService.execute('123')).rejects.toThrowError(errorMessage)
  })
})
