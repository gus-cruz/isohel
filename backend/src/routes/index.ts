import { Router } from 'express';
import recipeRouter from './recipes.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/recipes', recipeRouter);
routes.use('/user', userRouter);

export default routes;