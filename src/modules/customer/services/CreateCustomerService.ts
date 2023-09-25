import AppError from '@shared/errors/AppError';
import { ICreateCustomer } from '../domain/models/ICreateCustomer';
import { ICustomer } from '../domain/models/ICustomer';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute({
    email,
    first_name,
    last_name,
    password,
  }: ICreateCustomer): Promise<ICustomer> {
    const customerExists = await this.customerRepository.findByEmail(email);

    if (customerExists) {
      throw new AppError('Customer exists', 400);
    }

    const customer = await this.customerRepository.create({
      first_name,
      last_name,
      email,
      password,
    });

    return customer;
  }
}

export default CreateCustomerService;
