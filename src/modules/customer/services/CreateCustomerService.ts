import AppError from '@shared/errors/AppError';
import Customer from '../typeorm/entities/Customer';
import { customerRepository } from '../typeorm/repositories/CustomerRepository';

interface IResponse {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

class CreateCustomerService {
  public async execute({
    email,
    first_name,
    last_name,
    password,
  }: IResponse): Promise<Customer> {
    const customerExists = await customerRepository.findByEmail(email);

    if (customerExists) {
      throw new AppError('Customer exists', 400);
    }

    const customer = customerRepository.create({
      first_name,
      last_name,
      email,
      password,
    });

    await customerRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
