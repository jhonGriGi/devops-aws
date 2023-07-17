import * as connection from '../../../../../src/infrastructure/driven/mysql/mysql_connection'

describe('Mysql User repository test suit', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Should execute query function', async () => {
    const mockQuery = jest.fn().mockResolvedValue([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ])

    const mockConnection = {
      query: mockQuery
    }

    jest.spyOn(connection, 'connectDb').mockResolvedValue(mockConnection)

    const db = await connection.connectDb()
    const [results] = await db.query('SELECT * FROM customers')

    expect(results.name).toBe('John')
  })

  test('Should throw an error when is called', async () => {
    const errorMessage = 'Error no controlado'

    jest.spyOn(connection, 'connectDb').mockRejectedValue(new Error(errorMessage))

    await expect(connection.connectDb()).rejects.toThrowError(errorMessage)
  })
})
