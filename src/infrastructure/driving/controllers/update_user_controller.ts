import { type Request, type Response } from 'express'
import { type UpdateUserServicePort } from '../../../application/ports/update_user_service_port'

export class UpdateUserController {
  private readonly userService: UpdateUserServicePort

  constructor (userService: UpdateUserServicePort) {
    this.userService = userService
  }

  async execute (req: Request, res: Response): Promise<void> {
    await this.userService.execute(req.body)

    res.status(204).end()
  }
}
