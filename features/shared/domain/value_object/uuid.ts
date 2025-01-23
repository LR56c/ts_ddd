import {v4} from 'uuid'
export class Uuid {
    private constructor(readonly value: string) {
    }
    public static create(): Uuid {
        return new Uuid(v4());
    }

    public static fromValue(value: string): Uuid {
        return new Uuid(value);
    }
}
