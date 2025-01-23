import type { User } from "./user.ts"

export abstract class UserRepository {
    abstract save(user : User): Promise<void>
    abstract find(email : string): Promise<User>
}
