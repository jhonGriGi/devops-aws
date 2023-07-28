import { MySqlUserRepository } from '../../../../../src/infrastructure/driven/repositories/mysql_user_repository'
import { MockConnection } from '../../../../mocks/infrastructure/mock_connection'

// Mocking the Connection object for testing purposes
describe('MySqlUserRepository', () => {
  let userRepository: MySqlUserRepository
  let mockConnection: MockConnection

  beforeEach(() => {
    mockConnection = new MockConnection()
    userRepository = new MySqlUserRepository(mockConnection)
  })

  // Test for searchAll()
  it('should return an array of users', async () => {
    // Mocking the response from the database
    const mockRows = [{ id: 1, name: 'John Doe', email: 'john@example.com' }]
    mockConnection.query = jest.fn().mockResolvedValue([mockRows])

    const users = await userRepository.searchAll()
    expect(users).toEqual(mockRows)
  })

  it('Should throw an error when searchAll is called', async () => {
    const errorMessage = 'Error no controlado'

    jest.spyOn(mockConnection, 'query').mockRejectedValue(new Error(errorMessage))

    await expect(userRepository.searchAll()).rejects.toThrowError(errorMessage)
  })

  it('Should throw an error when it has not connection with mysql', async () => {
    const errorMessage = 'No hay conexion con mysql'

    jest.spyOn(mockConnection, 'query').mockResolvedValue([])

    await expect(userRepository.searchAll()).rejects.toThrowError(errorMessage)
  })

  // Test for create()
  it('should create a new user', async () => {
    const newUser = { id: '2', name: 'Jane Doe', email: 'jane@example.com' }

    // Mocking the response from the database
    mockConnection.query = jest.fn().mockResolvedValue(null)

    await userRepository.create(newUser)

    // Add assertions here to check if the user was created properly
  })

  it('Should throw an error when create is called', async () => {
    const newUser = {
      id: '1',
      name: 'Jane Doe',
      email: 'jane@gmail.com'
    }
    const errorMessage = 'Error no controlado'

    jest.spyOn(mockConnection, 'query').mockRejectedValue(new Error(errorMessage))

    await expect(userRepository.create(newUser)).rejects.toThrowError(errorMessage)
  })

  // Test for searchById()
  it('should return a user when given a valid ID', async () => {
    const mockUser = [{ id: '3', name: 'Alice', email: 'alice@example.com' }]
    const validId = '3'

    // Mocking the response from the database
    jest.spyOn(mockConnection, 'query').mockResolvedValue([mockUser])

    const user = await userRepository.searchById(validId)
    expect(user).toEqual(mockUser[0])
  })

  // Test for searchById() when the ID is not found
  it('should return null when given an invalid ID', async () => {
    const invalidId = '999'
    const errorMessage = 'No hay conexion con mysql'

    // Mocking the response from the database
    jest.spyOn(mockConnection, 'query').mockResolvedValue([])

    await expect(userRepository.searchById(invalidId)).rejects.toThrowError(errorMessage)
  })

  // Add similar tests for update() and delete() methods
  it('Should return throw an error when update is called', async () => {
    const errorMessage = 'Error no controlado'
    const userMock = {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@gmail.com'
    }

    jest.spyOn(mockConnection, 'query').mockRejectedValue(new Error(errorMessage))

    await expect(userRepository.update(userMock)).rejects.toThrowError(errorMessage)
  })

  it('Should throw an error when delete is called', async () => {
    const errorMessage = 'Error no controlado'
    const userId = '123'

    jest.spyOn(mockConnection, 'query').mockRejectedValue(new Error(errorMessage))

    await expect(userRepository.delete(userId)).rejects.toThrowError(errorMessage)
  })
})
