import { Request, Response } from 'express';
import { RegisterUserDto } from '../../domain/dtos/auth/register-user-dto';
import { AuthService } from '../services/auth-service';

export class AuthController {
  //DI
  // Here we are inject the auth-service but we don't initialize yet, it will be initialized where we need to use it, therefore this will be done into auth-routes.ts file.
  constructor(public readonly authService: AuthService) {}

  login = (req: Request, res: Response) => {
    res.json('login');
  };
  register = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.authService
      .registerUser(registerUserDto!) // We use the exclamation mark to indicate that we already have the registerUserDto (it is in the 14 line.)
      .then((user) => res.json(user));
  };
  validateEmail = (req: Request, res: Response) => {
    res.json('User validateEmail');
  };
}
