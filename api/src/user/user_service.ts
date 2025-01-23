import { Elysia }      from "elysia"
import { UserRequest } from "./user_model"
import { UserRepository } from "user/domain/user_repository"
import { UserMongoData } from "user/infrastructure/db/mongo/user_mongo_data"
import { UserDTO } from "user/application/dto"
import { CreateUser } from "user/application/create_user"

const repo : UserRepository = new UserMongoData()
        const create = new CreateUser(repo)
export const userService = new Elysia( { name: "Service.User" } )
  .derive( { as: "scoped" }, () => (
    {
      createUser: async ( data: UserRequest ) => {
        const dto =  new UserDTO(data.id, data.name, data.email)
        await create.execute(dto)
        return true
      }
    }
  ) )
