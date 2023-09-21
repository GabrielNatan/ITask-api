import AppError from '@shared/errors/AppError';
import Customer from '../typeorm/entities/Customer';
import { customerRepository } from '../typeorm/repositories/CustomerRepository';

class CustomerShowService {
  public async execute(id: number): Promise<Customer> {
    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new AppError('User not found.', 404);
    }

    return customer;
  }
}

export default CustomerShowService;
