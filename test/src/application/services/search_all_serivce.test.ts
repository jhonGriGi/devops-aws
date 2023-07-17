import { UserMapper } from '../../../../src/application/mapper/user_mapper'
import { SearchAllService } from '../../../../src/application/services/search_all_service'
import { MockSearchAll } from '../../../mocks/domain/mock-use-cases/mock_search_all'
import { UserMotherPattern } from '../../../mocks/domain/mother-pattern/user-mother-pattern'

describe('Search all service test suit', () => {
  let userService: SearchAllService
  let userUseCase: MockSearchAll
  let mapper: UserMapper

  beforeAll(() => {
    userUseCase = new MockSearchAll()
    mapper = new UserMapper()
    userService = new SearchAllService(userUseCase, mapper)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userUseCase, 'execute').mockRejectedValue(new Error(errorMessage))

    await expect(userService.execute()).rejects.toThrowError(errorMessage)
  })

  test('Should return an array when is called', async () => {
    const data = UserMotherPattern.getArrayUsers()

    const result = await userService.execute()

    expect(result).toStrictEqual(data)
  })
})
