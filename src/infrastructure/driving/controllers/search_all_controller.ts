import { type Request, type Response } from 'express'
import { type SearchAllServicePort } from '../../../application/ports/search_all_service_port'

export class SearchAllController {
  private readonly userService: SearchAllServicePort

  constructor (userService: SearchAllServicePort) {
    this.userService = userService
  }

  async execute (req: Request, res: Response): Promise<void> {
    const data = await this.userService.execute()
    res.status(200).send(data)
  }
}
