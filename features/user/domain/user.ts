import  { Uuid } from "shared/domain/value_object/uuid.ts"

export class User {
    private constructor(
      readonly id: Uuid,
      readonly name: string,
      readonly email: string) {
    }

    public static create(id: Uuid, name: string, email: string): User {
      return new User(id, name, email);
    }

    public static fromPrimitives(id: string, name: string, email: string): User {
      return new User(Uuid.fromValue(id), name, email);
    }
}
