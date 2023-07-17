import { DATABASE_CREDENTIALS } from '../../configuration/constants'
import mysql from 'mysql2/promise'

const dbConfig = {
  host: DATABASE_CREDENTIALS.HOST,
  port: DATABASE_CREDENTIALS.PORT,
  user: DATABASE_CREDENTIALS.USER,
  password: DATABASE_CREDENTIALS.PASSWORD,
  database: DATABASE_CREDENTIALS.DATABASE
}

export const connectDb = async (): Promise<any> => {
  try {
    const connection = await mysql.createConnection(dbConfig)
    return connection
  } catch (error: any) {
    console.log(error)
  }
}
