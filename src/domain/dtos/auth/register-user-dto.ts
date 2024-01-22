// Whit this file called DTO we are assurance that we are received the information as we need, for instance the code below make the validations before create a new register.

import { regularExps } from '../../../config';

export class RegisterUserDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ['Missing name'];
    if (!email) return ['Missing email'];
    if (!regularExps.email.test(email)) return ['Email is invalid'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password should have min 6 characters'];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
