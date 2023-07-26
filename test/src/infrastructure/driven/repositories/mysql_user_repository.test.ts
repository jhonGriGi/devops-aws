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

  // Test for create()
  it('should create a new user', async () => {
    const newUser = { id: '2', name: 'Jane Doe', email: 'jane@example.com' }

    // Mocking the response from the database
    mockConnection.query = jest.fn().mockResolvedValue(null)

    await userRepository.create(newUser)

    // Add assertions here to check if the user was created properly
  })

  // Test for searchById()
  it('should return a user when given a valid ID', async () => {
    const mockUser = { id: '3', name: 'Alice', email: 'alice@example.com' }
    const validId = '3'

    // Mocking the response from the database
    mockConnection.query = jest.fn().mockResolvedValue([mockUser])

    const user = await userRepository.searchById(validId)
    expect(user).toEqual(mockUser)
  })

  // Test for searchById() when the ID is not found
  it('should return null when given an invalid ID', async () => {
    const invalidId = '999'

    // Mocking the response from the database
    mockConnection.query = jest.fn().mockResolvedValue([]) // Devolvemos un array vacío

    const user = await userRepository.searchById(invalidId)
    expect(user).toBeNull()
  })

  // Add similar tests for update() and delete() methods
})
