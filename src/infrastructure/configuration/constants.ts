import 'dotenv/config'

export const PORT = process.env.PORT ?? 3000

interface dbConfig {
  HOST: string
  PORT: number
  USER: string
  PASSWORD: string
  DATABASE: string
}

export const DATABASE_CREDENTIALS: dbConfig = {
  HOST: process.env.DB_HOST ?? 'localhost',
  PORT: parseInt(typeof process.env.DB_PORT) ?? 3306,
  USER: process.env.DB_USER ?? 'root',
  PASSWORD: process.env.DB_PASSWORD ?? 'password',
  DATABASE: process.env.DB_NAME ?? 'mydatabase'
}
