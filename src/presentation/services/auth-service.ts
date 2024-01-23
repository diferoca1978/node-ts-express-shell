//This service is in charge to make the process to create and save a user into our DB.

import { UserModel } from '../../data';
import { CustomError, RegisterUserDto, UserEntity } from '../../domain';

export class AuthService {
  // DI
  constructor() {}

  public async registerUser(registerUserDto: RegisterUserDto) {
    // Here is where we'll make all process to create and save a user into DB.

    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if (existUser) throw CustomError.badRequest('Email already exist 😒');

    // So that we are to return here is that we want to use in the controller. In this case we are to return the user.
    try {
      const user = new UserModel(registerUserDto);
      await user.save(); // With this line we are saved the user in the DB.

      // to encript password

      // to generate a JWT to authenticate the user.

      // confirmation Email

      // To save the user to the DB without the password and adding the token.

      const { password, ...rest } = UserEntity.fromObject(user);

      return {
        user: rest,
        token: 'abc',
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
