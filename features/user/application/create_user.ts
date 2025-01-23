import type { UserRepository } from "../domain/user_repository";
import type { UserDTO }        from "./dto.ts"
import { UserMapper }          from "./mapper.ts"

export class CreateUser {
  constructor(readonly repo : UserRepository) {
  }

  async execute(user : UserDTO): Promise<void> {
    const newUser = UserMapper.toDomain(user);
    await this.repo.save(newUser);
  }
}
