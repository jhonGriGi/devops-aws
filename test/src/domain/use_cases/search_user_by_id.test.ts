import { SearchSpecificUser } from './../../../../src/domain/use_cases/search_user_by_id'
import { MockUserRepository } from '../../../mocks/infrastructure/mock_user_repository'

describe('Search user by id test suit', () => {
  let userRepository: MockUserRepository
  let searchByIdUseCase: SearchSpecificUser

  beforeAll(() => {
    userRepository = new MockUserRepository()
    searchByIdUseCase = new SearchSpecificUser(userRepository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an Error when searchByIdUseCase is called', async () => {
    const id = '123'
    const errorMessage = 'Error no controlado'
    jest.spyOn(userRepository, 'searchById').mockRejectedValue(new Error(errorMessage))

    await expect(searchByIdUseCase.execute(id)).rejects.toThrowError(errorMessage)
  })
})
