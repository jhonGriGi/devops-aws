import { type Request, type Response } from 'express'
import { type CreateUserServicePort } from '../../../application/ports/create_user_service_port'

export class CreateUserController {
  private readonly userService: CreateUserServicePort

  constructor (userService: CreateUserServicePort) {
    this.userService = userService
  }

  async execute (req: Request, res: Response): Promise<void> {
    await this.userService.execute(req.body)

    res.status(204).end()
  }
}
