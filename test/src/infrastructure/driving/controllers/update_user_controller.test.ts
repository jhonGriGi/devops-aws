import { UpdateUserController } from '../../../../../src/infrastructure/driving/controllers'
import { MockUpdateUserService } from '../../../../mocks/application/services/mock_update_user_service'
import { type Request, type Response } from 'express'
describe('Update user controller test suit', () => {
  let userService: MockUpdateUserService
  let userController: UpdateUserController

  beforeAll(() => {
    userService = new MockUpdateUserService()
    userController = new UpdateUserController(userService)
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
