//This service is in charge to make the process to create and save a user into our DB.

import { UserModel } from '../../data';
import { CustomError, RegisterUserDto } from '../../domain';

export class AuthService {
  // DI
  constructor() {}

  public async registerUser(registerUserDto: RegisterUserDto) {
    // Here is where we'll make all process to create and save a user into DB.

    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if (existUser) throw CustomError.badRequest('Email already exist 😒');

    // So that we are to return here is that we want to use in the controller.

    return 'All ok 👌';
  }
}
