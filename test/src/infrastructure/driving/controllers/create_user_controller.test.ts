import { type Request, type Response } from 'express'
import { CreateUserController } from '../../../../../src/infrastructure/driving/controllers'
import { MockCreateUser } from '../../../../mocks/domain/mock-use-cases/mock_create_user'

describe('Create user controller test suit', () => {
  let userController: CreateUserController
  let userService: MockCreateUser

  beforeAll(() => {
    userService = new MockCreateUser()
    userController = new CreateUserController(userService)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userService, 'execute').mockRejectedValue(new Error(errorMessage))
    const res = {} as unknown as Response
    const req = {} as unknown as Request

    await expect(userController.execute(req, res)).rejects.toThrowError(errorMessage)
  })
})
