import { inject, injectable } from 'tsyringe';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';
import { ICustomer } from '../domain/models/ICustomer';

@injectable()
class CustomerListService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute(): Promise<ICustomer[]> {
    const customers = (await this.customerRepository.find()) || [];

    return customers;
  }
}

export default CustomerListService;
