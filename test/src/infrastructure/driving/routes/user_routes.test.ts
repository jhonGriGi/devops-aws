import supertest from 'supertest'
import { app } from '../../../../../src'

const request = supertest(app)

describe('test user routes', () => {
  test('Base route', async () => {
    const response = await request.get('/')

    expect(response.status).toBe(200)
    expect(response.body.message).toEqual('Hello from server api')
  })

  test('/users, all users', async () => {
    const response = await request.get('/v1/users')

    expect(response).toBeDefined()
  })

  test('/users/, post execution', async () => {
    const response = await request.post('/v1/users')

    expect(response).toBeDefined()
  })

  test('/users/, put execution', async () => {
    const response = await request.put('/v1/users')

    expect(response).toBeDefined()
  })
})
