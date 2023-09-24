import AppError from '@shared/errors/AppError';
import Customer from '../infra/typeorm/entities/Customer';
import { customerRepository } from '../infra/typeorm/repositories/CustomerRepository';

interface IResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

class UpdateCustomerService {
  public async execute({
    id,
    email,
    first_name,
    last_name,
    password,
  }: IResponse): Promise<Customer> {
    const customerExists = await customerRepository.findById(Number(id));

    if (!customerExists) {
      throw new AppError('Customer not found', 404);
    }

    customerExists.email = email;
    customerExists.password = password;
    customerExists.first_name = first_name;
    customerExists.last_name = last_name;

    await customerRepository.save(customerExists);

    return customerExists;
  }
}

export default UpdateCustomerService;
