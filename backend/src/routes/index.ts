import { Router } from 'express';
import recipeRouter from './recipes.routes';
import userRouter from './user.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/recipes', recipeRouter);
routes.use('/user', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;