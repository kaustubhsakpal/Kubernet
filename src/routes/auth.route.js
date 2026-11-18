import {Router} from 'express';
import {RegisterController} from '../controller/auth.controller.js'
  const AuthRouter = Router();


AuthRouter.post("/register",RegisterController);

export default AuthRouter;