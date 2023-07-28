import express, { type Express, type Request, type Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { PORT } from './infrastructure/configuration/constants'
import userRouter from './infrastructure/driving/routes/user.routes'

dotenv.config()

export const app: Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_req: Request, res: Response) => {
  res.status(200)
    .send({
      message: 'Hello from server api after pipeline integration'
    })
})

app.use('/v1/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
