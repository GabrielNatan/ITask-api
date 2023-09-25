import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';
import { ICustomer } from '../domain/models/ICustomer';

@injectable()
class CustomerShowService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute(id: number): Promise<ICustomer> {
    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new AppError('User not found.', 404);
    }

    return customer;
  }
}

export default CustomerShowService;
