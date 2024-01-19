import { Request, Response } from 'express';

export class AuthController {
  //DI
  constructor() {}

  login = (req: Request, res: Response) => {
    res.send('User login');
  };
  register = (req: Request, res: Response) => {
    res.send('User register');
  };
  validateEmail = (req: Request, res: Response) => {
    res.send('User validateEmail');
  };
}
