import { SearchAllUsers } from './../../../../src/domain/use_cases/search_all_users'
import { MockUserRepository } from '../../../mocks/infrastructure/mock_user_repository'

describe('Search all users test suit', () => {
  let userRepository: MockUserRepository
  let searchAllUseCase: SearchAllUsers

  beforeAll(() => {
    userRepository = new MockUserRepository()
    searchAllUseCase = new SearchAllUsers(userRepository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when searchAllUseCase is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userRepository, 'searchAll').mockRejectedValue(new Error(errorMessage))

    await expect(searchAllUseCase.execute()).rejects.toThrowError(errorMessage)
  })
})
