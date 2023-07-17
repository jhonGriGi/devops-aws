import { type SearchUsersUseCase } from '../../domain/ports/search_users'
import { type UserDto } from '../dto/user_dto'
import { type UserMapper } from '../mapper/user_mapper'
import { type SearchAllServicePort } from '../ports/search_all_service_port'

export class SearchAllService implements SearchAllServicePort {
  private readonly userUseCase: SearchUsersUseCase
  private readonly mapper: UserMapper

  constructor (userUseCase: SearchUsersUseCase, mapper: UserMapper) {
    this.userUseCase = userUseCase
    this.mapper = mapper
  }

  async execute (): Promise<UserDto[]> {
    try {
      const usersModels = await this.userUseCase.execute()
      return this.mapper.fromModelArrayToDtoArray(usersModels)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
