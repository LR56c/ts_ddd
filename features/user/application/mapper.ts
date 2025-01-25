import { User }         from "../domain/user.ts"
import { UserDTO } from "./dto.ts"

export class UserMapper {
  public static toDTO( user: User ): UserDTO {
    return {
      id   : user.id.value,
      name : user.name,
      email: user.email
    }
  }

  public static toDomain( dto: UserDTO ): User {
    return User.fromPrimitives(
      dto.id,
      dto.name,
      dto.email
    )
  }

  public static toJson( user: UserDTO ): Record<string, any> {
    return {
      id   : user.id,
      name : user.name,
      email: user.email
    }
  }

  public static fromJson( json: Record<string, any> ): UserDTO {
    return new UserDTO( json.id, json.name, json.email)
  }
}
