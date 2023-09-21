import Customer from '../typeorm/entities/Customer';
import { customerRepository } from '../typeorm/repositories/CustomerRepository';

class CustomerListService {
  public async execute(): Promise<Customer[]> {
    const customers = customerRepository.find();

    return customers;
  }
}

export default CustomerListService;
