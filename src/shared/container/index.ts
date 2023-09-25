import { container } from 'tsyringe';

import { ICustomerRepository } from '@modules/customer/domain/repositories/ICustomerRepository';
import CustomerRepository from '@modules/customer/infra/typeorm/repositories/CustomerRepository';

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository
);
