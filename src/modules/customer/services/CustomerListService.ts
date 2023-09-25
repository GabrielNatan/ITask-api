import { inject, injectable } from 'tsyringe';
import Customer from '../infra/typeorm/entities/Customer';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

@injectable()
class CustomerListService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute(): Promise<Customer[]> {
    const customers = (await this.customerRepository.find()) || [];

    return customers;
  }
}

export default CustomerListService;
