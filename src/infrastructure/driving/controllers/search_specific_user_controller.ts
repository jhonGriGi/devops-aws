import { type Request, type Response } from 'express'
import { type SearchSpecificUserServicePort } from '../../../application/ports/search_specific_user_service_port'

export class SearchSpecificUserController {
  private readonly userService: SearchSpecificUserServicePort

  constructor (userService: SearchSpecificUserServicePort) {
    this.userService = userService
  }

  async execute (req: Request, res: Response): Promise<void> {
    const data = await this.userService.execute(req.params.id)

    res.status(200).send(data)
  }
}
