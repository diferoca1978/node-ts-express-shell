import { Router } from 'express';
import { AuthController } from './auth-controllers';
import { AuthService } from '../services/auth-service';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthService();

    const controller = new AuthController(authService);

    // Definig routes
    router.post('/login', controller.login);
    router.post('/register', controller.register);
    router.get('/validate-email/:token', controller.validateEmail);

    return router;
  }
}
