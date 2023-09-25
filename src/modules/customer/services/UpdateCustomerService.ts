import AppError from '@shared/errors/AppError';
import { ICustomer } from '../domain/models/ICustomer';
import { inject, injectable } from 'tsyringe';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

interface IResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@injectable()
class UpdateCustomerService {
  constructor(
    @inject('CustomerRepository')
    public customerRepository: ICustomerRepository
  ) {}

  public async execute({
    id,
    email,
    first_name,
    last_name,
    password,
  }: IResponse): Promise<ICustomer> {
    const customerExists = await this.customerRepository.findById(Number(id));

    if (!customerExists) {
      throw new AppError('Customer not found', 404);
    }

    customerExists.email = email;
    customerExists.password = password;
    customerExists.first_name = first_name;
    customerExists.last_name = last_name;

    await this.customerRepository.save(customerExists);

    return customerExists;
  }
}

export default UpdateCustomerService;
