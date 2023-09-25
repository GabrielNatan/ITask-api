import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';
import AppError from '@shared/errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

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

export { app };
