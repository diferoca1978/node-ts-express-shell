//  This entity was created with the objective to create a user without have to use the DB. The user will be returned by this entity not by the model of mongoose. Because we don't want to create a dependency in our whole app to DB models and, as a consequence create a cascade effect that will be very difficult to change in our code.

import { CustomError } from '../errors/custom-error';

export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly validateEmail: boolean,
    public readonly password: string,
    public readonly role: string[],
    public readonly avatar?: string
  ) {}

  // As we want to create this user from an ordered object, we'll need to use something like this:

  static fromObject(object: { [key: string]: any }) {
    const { id, _id, name, email, validateEmail, password, role, avatar } =
      object;

    if (!id && !_id) throw CustomError.badRequest('Missing id');
    if (!name) throw CustomError.badRequest('Missing name');
    if (!email) throw CustomError.badRequest('Missing email');
    if (!validateEmail === undefined)
      throw CustomError.badRequest('Missing emailVAlidated');
    if (!password) throw CustomError.badRequest('Missing password');
    if (!role) throw CustomError.badRequest('Missing role');

    return new UserEntity(
      id || _id,
      name,
      email,
      validateEmail,
      password,
      role,
      avatar
    );
  }
}
