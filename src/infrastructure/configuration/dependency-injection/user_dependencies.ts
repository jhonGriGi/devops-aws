import { UserMapper } from './../../../application/mapper/user_mapper'
import { CreateUserOnRegister } from '../../../domain/use_cases/create_user_use_case'
import { MySqlUserRepository } from '../../driven/repositories/mysql_user_repository'
import { UpdateUser } from '../../../domain/use_cases/update_user_use_case'
import { DeleteUser } from '../../../domain/use_cases/delete_user_use_case'
import { SearchAllUsers } from '../../../domain/use_cases/search_all_users'
import { SearchSpecificUser } from '../../../domain/use_cases/search_user_by_id'
import { CreateUserService } from '../../../application/services/create_user_service'
import { SearchSpecificUserService } from '../../../application/services/search_specific_service'
import { SearchAllService } from '../../../application/services/search_all_service'
import { UpdateUserService } from '../../../application/services/update_user_service'
import { DeleteUserService } from '../../../application/services/delete_user_service'
import { CreateUserController, DeleteUserController, SearchAllController, SearchSpecificUserController, UpdateUserController } from '../../driving/controllers'
import { connectDb } from '../../driven/mysql/mysql_connection'

const db = connectDb().then((value) => value)
const userRepository = new MySqlUserRepository(db)
const userMapper = new UserMapper()

const userCreateUseCase = new CreateUserOnRegister(userRepository)
const updateUserUseCase = new UpdateUser(userRepository)
const deleteUserUseCase = new DeleteUser(userRepository)
const searchAllUsersUseCase = new SearchAllUsers(userRepository)
const searchSpecificUser = new SearchSpecificUser(userRepository)

const userCreateService = new CreateUserService(userCreateUseCase, userMapper)
const userSearchSpecificService = new SearchSpecificUserService(searchSpecificUser, userMapper)
const userSearchAllService = new SearchAllService(searchAllUsersUseCase, userMapper)
const updateUserService = new UpdateUserService(updateUserUseCase, userMapper)
const deleteUserService = new DeleteUserService(deleteUserUseCase)

export const deleteUserController = new DeleteUserController(deleteUserService)
export const updateUserController = new UpdateUserController(updateUserService)
export const createUserController = new CreateUserController(userCreateService)
export const searchSpecificUserController = new SearchSpecificUserController(userSearchSpecificService)
export const searchAllController = new SearchAllController(userSearchAllService)
