import {
  PasswordMissingDigitError,
  PasswordMissingLowercaseError,
  PasswordMissingSpecialCharacterError,
  PasswordMissingUppercaseError, PasswordTooLongError, PasswordTooShortError
} from "./exceptions/password_exception"

export class Password {
  constructor(
    readonly value: string
  )
  {
  }

  static create( value: string ): Password {
    if ( value.length < 8 ) {
      throw new PasswordTooShortError()
    }
    if ( value.length > 20 ) {
      throw new PasswordTooLongError()
    }
    if ( !/[A-Z]/.test( value ) ) {
      throw new PasswordMissingUppercaseError()
    }
    if ( !/[a-z]/.test( value ) ) {
      throw new PasswordMissingLowercaseError()
    }
    if ( !/[0-9]/.test( value ) ) {
      throw new PasswordMissingDigitError()
    }
    if ( !/[!@#$%^&*]/.test( value ) ) {
      throw new PasswordMissingSpecialCharacterError()
    }
    return new Password( value )
  }

  strengthen(): string {
    const length = this.value.length
    let score    = 0
    if ( /[A-Z]/.test( this.value ) ) {
      score++
    }
    if ( /[a-z]/.test( this.value ) ) {
      score++
    }
    if ( /[0-9]/.test( this.value ) ) {
      score++
    }
    if ( /[!@#$%^&*(),.?":{}|<>]/.test( this.value ) ) {
      score++
    }
    if ( length > 12 && score === 4 ) {
      return "Fuerte"
    }
    if ( length >= 8 && score >= 3 ) {
      return "Moderada"
    }
    return "Débil"
  }
}
