import { DeleteUserController } from '../../../../../src/infrastructure/driving/controllers'
import { MockDeleteUser } from '../../../../mocks/domain/mock-use-cases/mock_delete_user'
import { type Request, type Response } from 'express'
describe('Delete user controller test suit', () => {
  let userController: DeleteUserController
  let userService: MockDeleteUser

  beforeAll(() => {
    userService = new MockDeleteUser()
    userController = new DeleteUserController(userService)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userService, 'execute').mockRejectedValue(new Error(errorMessage))
    const res = {} as unknown as Response
    const req = {
      params: {
        id: '123'
      }
    } as unknown as Request

    await expect(userController.execute(req, res)).rejects.toThrowError(errorMessage)
  })
})
