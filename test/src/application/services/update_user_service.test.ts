import { UserMapper } from '../../../../src/application/mapper/user_mapper'
import { UpdateUserService } from '../../../../src/application/services/update_user_service'
import { MockUpdateUser } from '../../../mocks/domain/mock-use-cases/mock_update_user'
import { UserMotherPattern } from '../../../mocks/domain/mother-pattern/user-mother-pattern'

describe('Update user service test suit', () => {
  let userService: UpdateUserService
  let userUseCase: MockUpdateUser
  let mapper: UserMapper

  beforeAll(() => {
    userUseCase = new MockUpdateUser()
    mapper = new UserMapper()
    userService = new UpdateUserService(userUseCase, mapper)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when is called', async () => {
    const userDto = UserMotherPattern.getUser()
    const errorMessage = 'Error no controlado'
    jest.spyOn(userUseCase, 'execute').mockRejectedValue(new Error(errorMessage))

    await expect(userService.execute(userDto)).rejects.toThrowError(errorMessage)
  })
})
