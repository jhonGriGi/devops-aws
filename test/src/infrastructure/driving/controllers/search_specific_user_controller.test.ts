import { type Request, type Response } from 'express'
import { MockSearchSpecificUser } from '../../../../mocks/application/services/mock_search_specific_service'
import { SearchSpecificUserController } from '../../../../../src/infrastructure/driving/controllers'

describe('Search all controller test suit', () => {
  let userService: MockSearchSpecificUser
  let userController: SearchSpecificUserController

  beforeAll(() => {
    userService = new MockSearchSpecificUser()
    userController = new SearchSpecificUserController(userService)
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
