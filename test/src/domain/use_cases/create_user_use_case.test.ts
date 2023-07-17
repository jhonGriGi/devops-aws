import { type User } from '../../../../src/domain/models/User'
import { CreateUserOnRegister } from '../../../../src/domain/use_cases/create_user_use_case'
import { MockUserRepository } from '../../../mocks/infrastructure/mock_user_repository'

describe('create user use case', () => {
  let createUseCase: CreateUserOnRegister
  let userRepository: MockUserRepository
  beforeAll(() => {
    userRepository = new MockUserRepository()
    createUseCase = new CreateUserOnRegister(userRepository)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an Error when createUseCase is called', async () => {
    const user: User = {
      id: '032',
      name: 'John Doe 2',
      email: 'johndoetwo@gmail.com'
    }
    const errorMessage = 'Error no controlado'
    jest.spyOn(userRepository, 'create').mockRejectedValue(new Error(errorMessage))

    await expect(createUseCase.execute(user)).rejects.toThrowError(errorMessage)
  })
})
