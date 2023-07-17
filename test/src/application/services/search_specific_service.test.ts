import { UserMapper } from '../../../../src/application/mapper/user_mapper'
import { SearchSpecificUserService } from '../../../../src/application/services/search_specific_service'
import { MockSearchSpecificUser } from '../../../mocks/domain/mock-use-cases/mock_search_specific'
import { UserMotherPattern } from '../../../mocks/domain/mother-pattern/user-mother-pattern'

describe('Search specific user test suit', () => {
  let userService: SearchSpecificUserService
  let userUseCase: MockSearchSpecificUser
  let mapper: UserMapper

  beforeAll(() => {
    userUseCase = new MockSearchSpecificUser()
    mapper = new UserMapper()
    userService = new SearchSpecificUserService(userUseCase, mapper)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userUseCase, 'execute').mockRejectedValue(new Error(errorMessage))

    await expect(userService.execute('1')).rejects.toThrowError(errorMessage)
  })

  test('Should return data when is called', async () => {
    const data = UserMotherPattern.getUser()

    const result = await userService.execute('123')

    expect(result).toStrictEqual(data)
  })

  test('Should return null when is called', async () => {
    const result = await userService.execute('0')

    expect(result).toBeNull()
  })
})
