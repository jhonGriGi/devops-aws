import { type CreateUserUseCase } from '../../domain/ports/create_user'
import { type UserDto } from '../dto/user_dto'
import { type UserMapper } from '../mapper/user_mapper'
import { type CreateUserServicePort } from '../ports/create_user_service_port'

export class CreateUserService implements CreateUserServicePort {
  private readonly userUseCase: CreateUserUseCase
  private readonly mapper: UserMapper

  constructor (userUseCase: CreateUserUseCase, mapper: UserMapper) {
    this.userUseCase = userUseCase
    this.mapper = mapper
  }

  async execute (userDto: UserDto): Promise<void> {
    try {
      const userModel = this.mapper.fromDtoToModel(userDto)
      await this.userUseCase.execute(userModel)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
