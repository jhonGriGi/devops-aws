import { SearchAllController } from '../../../../../src/infrastructure/driving/controllers'
import { MockSearchAll } from '../../../../mocks/domain/mock-use-cases/mock_search_all'
import { type Request, type Response } from 'express'

describe('Search all controller test suit', () => {
  let userService: MockSearchAll
  let userController: SearchAllController

  beforeAll(() => {
    userService = new MockSearchAll()
    userController = new SearchAllController(userService)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'
    jest.spyOn(userService, 'execute').mockRejectedValue(new Error(errorMessage))
    const res = {
      status: jest.fn(),
      send: jest.fn()
    } as unknown as Response
    const req = {} as unknown as Request

    await expect(userController.execute(req, res)).rejects.toThrowError(errorMessage)
  })

  test('Should call status and send function on res', async () => {
    const res = {
      status: jest.fn(),
      send: jest.fn()
    } as unknown as Response
    const req = {} as unknown as Request
    userController.execute = jest.fn()

    expect(userController.execute(req, res)).toBeCalledWith(req, res)
  })
})
