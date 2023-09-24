import { customerRoutes } from '@modules/customer/infra/http/routes/customer.routes';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRoutes);
router.use('/customers', customerRoutes);

export { router };
