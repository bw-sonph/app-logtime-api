import { Router } from 'express';

import authController from '../controllers/user';

const userRouter = Router();

userRouter.get('/', authController.search);

export default userRouter;
