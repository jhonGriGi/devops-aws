import { type SearchByIdUseCase } from '../../domain/ports/search_by_id'
import { type UserDto } from '../dto/user_dto'
import { type UserMapper } from '../mapper/user_mapper'
import { type SearchSpecificUserServicePort } from './../ports/search_specific_user_service_port'

export class SearchSpecificUserService implements SearchSpecificUserServicePort {
  private readonly userUseCase: SearchByIdUseCase
  private readonly mapper: UserMapper

  constructor (userUseCase: SearchByIdUseCase, mapper: UserMapper) {
    this.userUseCase = userUseCase
    this.mapper = mapper
  }

  async execute (id: string): Promise<UserDto | null> {
    try {
      const userModel = await this.userUseCase.execute(id)

      if (userModel === null) {
        return null
      }
      return this.mapper.fromModelToDto(userModel)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
