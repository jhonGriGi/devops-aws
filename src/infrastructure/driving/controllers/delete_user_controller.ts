import { type Request, type Response } from 'express'
import { type DeleteUserServicePort } from '../../../application/ports/delete_user_service_port'

export class DeleteUserController {
  private readonly userService: DeleteUserServicePort

  constructor (userService: DeleteUserServicePort) {
    this.userService = userService
  }

  async execute (req: Request, res: Response): Promise<void> {
    await this.userService.execute(req.params.id)

    res.status(204).end()
  }
}
