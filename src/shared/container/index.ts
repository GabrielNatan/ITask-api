import { container } from 'tsyringe';

import { ICustomerRepository } from '@modules/customer/domain/repositories/ICustomerRepository';
import CustomerRepository from '@modules/customer/infra/typeorm/repositories/CustomerRepository';
import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
);
