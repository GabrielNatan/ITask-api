import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.get('/', usersController.index);
usersRoutes.get('/:id', usersController.show);
usersRoutes.post('/', usersController.create);
usersRoutes.put('/:id', usersController.update);
usersRoutes.delete('/:id', usersController.delete);

export { usersRoutes };
