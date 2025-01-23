import type { UserRepository } from "../../../domain/user_repository.ts"
import type { User }           from "../../../domain/user.ts"
import { UserModel }           from "./user_entity.ts"

export class UserMongoData implements UserRepository {
    async save(user: User): Promise<void> {
        await UserModel.create({
            id   : user.id.value,
            name : user.name,
            email: user.email
        })

        const u = await UserModel.find()
        console.log('users', u)
    }
    async find(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}
