import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator'

export class UserDto {
  @IsEmpty()
    id?: string

  @IsNotEmpty()
  @IsString()
    name: string

  @IsNotEmpty()
  @IsEmail()
    email: string

  constructor (id: string, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }
}
