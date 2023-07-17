/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response } from 'express'
import { createUserController, deleteUserController, searchAllController, searchSpecificUserController, updateUserController } from '../../configuration/dependency-injection/user_dependencies'

const userRouter = express.Router()

userRouter
  .get('/', async (req: Request, res: Response) => { await searchAllController.execute(req, res) })
  .get('/:id', async (req: Request, res: Response) => { await searchSpecificUserController.execute(req, res) })
  .post('/', async (req: Request, res: Response) => { await createUserController.execute(req, res) })
  .delete('/:id', async (req: Request, res: Response) => { await deleteUserController.execute(req, res) })
  .put('/', async (req: Request, res: Response) => { await updateUserController.execute(req, res) })

export default userRouter
