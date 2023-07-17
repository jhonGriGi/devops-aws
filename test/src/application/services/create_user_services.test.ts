import { UserMapper } from '../../../../src/application/mapper/user_mapper'
import { CreateUserService } from '../../../../src/application/services/create_user_service'
import { MockCreateUser } from '../../../mocks/domain/mock-use-cases/mock_create_user'
import { UserMotherPattern } from '../../../mocks/domain/mother-pattern/user-mother-pattern'

describe('Create User Service test suit', () => {
  let userUseCase: MockCreateUser
  let mapper: UserMapper
  let userService: CreateUserService

  beforeAll(() => {
    userUseCase = new MockCreateUser()
    mapper = new UserMapper()
    userService = new CreateUserService(userUseCase, mapper)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an Error when is called', async () => {
    const userDto = UserMotherPattern.getUser()
    const errorMessage = 'Error no controlado'
    jest.spyOn(userUseCase, 'execute').mockRejectedValue(new Error(errorMessage))

    await expect(userService.execute(userDto)).rejects.toThrowError(errorMessage)
  })
})
