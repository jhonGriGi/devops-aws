import { type User } from '../../domain/models/User'
import { type UserDto } from '../dto/user_dto'
import { type BaseMapper } from './base_mapper'

export class UserMapper implements BaseMapper<User, UserDto> {
  fromModelToDto (model: User): UserDto {
    return {
      id: model.id,
      name: model.name,
      email: model.email
    }
  }

  fromDtoToModel (dto: UserDto): User {
    return {
      id: dto?.id,
      name: dto.name,
      email: dto.email
    }
  }

  fromModelArrayToDtoArray (models: User[]): UserDto[] {
    const usersDtos: UserDto[] = models.map((value, index) => {
      return {
        id: value.id,
        name: value.name,
        email: value.email
      }
    })

    return usersDtos
  }
}
