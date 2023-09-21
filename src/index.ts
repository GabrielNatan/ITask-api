import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import { AppDataSource } from '@shared/typeorm';
import { usersRoutes } from '@modules/users/routes/users.routes';
import { customerRoutes } from '@modules/customer/routes/customer.routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use('/users', usersRoutes);
  app.use('/customers', customerRoutes);

  app.use(
    async (
      error: Error,
      request: Request,
      response: Response,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _next: NextFunction
    ) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }

      console.log(error);

      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  );

  app.listen(3000, () => {
    console.log('App runner');
  });
});
