/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type User } from '../../../domain/models/User'
import { type UserRepository } from '../../../domain/repositories/user_repository'
import { connectDb } from '../mysql/mysql_connection'

export class MySqlUserRepository implements UserRepository {
  async searchAll (): Promise<User[]> {
    try {
      const db = await connectDb()
      const [rows] = await db.query('SELECT * FROM customers')
      let users: User[]
      if (Array.isArray(rows)) {
        users = rows.map((row: any) => {
          return {
            id: row.id,
            name: row.name,
            email: row.email
          }
        })
      } else {
        throw new Error('No hay conexion con mysql')
      }

      return users
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async create (user: User): Promise<void> {
    try {
      const db = await connectDb()
      const queryString = `
        INSERT INTO customers
        (name, email)
        VALUES ('${user.name}', '${user.email}')
      `

      db.query(queryString)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async searchById (id: string): Promise<User | null> {
    try {
      const db = await connectDb()
      const [rows] = await db.query(`SELECT * FROM customers WHERE customers.id = ${id}`)
      let users: User[]
      if (Array.isArray(rows)) {
        users = rows.map((row: any) => {
          return {
            id: row.id,
            name: row.name,
            email: row.email
          }
        })
      } else {
        throw new Error('No hay conexion con mysql')
      }

      return users[0]
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async update (user: User): Promise<void> {
    try {
      const db = await connectDb()
      const queryString = `
        UPDATE customers
        SET name = '${user.name}', email = '${user.email}'
        WHERE customers.id = ${user.id}
      `

      db.query(queryString)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  async delete (id: string): Promise<void> {
    try {
      const db = await connectDb()
      const queryString = `
        DELETE FROM customers
        WHERE customers.id = ${id}
      `

      db.query(queryString)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
