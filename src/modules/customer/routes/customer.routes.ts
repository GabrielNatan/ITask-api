import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';

const customerRoutes = Router();
const customerController = new CustomerController();

customerRoutes.get('/', customerController.index);

customerRoutes.get('/:id', customerController.show);

customerRoutes.post('/', customerController.create);

customerRoutes.put('/:id', customerController.update);

customerRoutes.delete('/:id', customerController.delete);

export { customerRoutes };
