import Customer from '../infra/typeorm/entities/Customer';
import { customerRepository } from '../infra/typeorm/repositories/CustomerRepository';

class CustomerListService {
  public async execute(): Promise<Customer[]> {
    const customers = (await customerRepository.find()) || [];

    return customers;
  }
}

export default CustomerListService;
