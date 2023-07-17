import { type UpdateUserUseCase } from '../../domain/ports/update_user'
import { type UserDto } from '../dto/user_dto'
import { type UserMapper } from '../mapper/user_mapper'
import { type UpdateUserServicePort } from '../ports/update_user_service_port'

export class UpdateUserService implements UpdateUserServicePort {
  private readonly userUseCase: UpdateUserUseCase
  private readonly mapper: UserMapper

  constructor (userUseCase: UpdateUserUseCase, mapper: UserMapper) {
    this.userUseCase = userUseCase
    this.mapper = mapper
  }

  async execute (userDto: UserDto): Promise<void> {
    try {
      const userDtoMapped = this.mapper.fromDtoToModel(userDto)
      await this.userUseCase.execute(userDtoMapped)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
