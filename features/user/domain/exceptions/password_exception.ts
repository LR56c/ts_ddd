export class PasswordException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PasswordException';
    }
}

export class PasswordTooShortError extends PasswordException {
    constructor() {
        super('Password is too short');
        this.name = 'PasswordTooShortError';
    }
}

export class PasswordTooLongError extends PasswordException {
    constructor() {
        super('Password is too long');
        this.name = 'PasswordTooLongError';
    }
}

export class PasswordMissingUppercaseError extends PasswordException {
    constructor() {
        super('Password is missing an uppercase letter');
        this.name = 'PasswordMissingUppercaseError';
    }
}

export class PasswordMissingLowercaseError extends PasswordException {
    constructor() {
        super('Password is missing a lowercase letter');
        this.name = 'PasswordMissingLowercaseError';
    }
}

export class PasswordMissingDigitError extends PasswordException {
    constructor() {
        super('Password is missing a digit');
        this.name = 'PasswordMissingDigitError';
    }
}

export class PasswordMissingSpecialCharacterError extends PasswordException {
    constructor() {
        super('Password is missing a special character');
        this.name = 'PasswordMissingSpecialCharacterError';
    }
}
