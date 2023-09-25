import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

interface IResponse {
  id: string;
}

@injectable()
class DeleteCustomerService {
  constructor(
    @inject('CustomerRepository')
    public customerRepository: ICustomerRepository
  ) {}

  public async execute({ id }: IResponse): Promise<undefined> {
    const customerExists = await this.customerRepository.findById(Number(id));

    if (!customerExists) {
      throw new AppError('Customer not found', 404);
    }

    await this.customerRepository.delete(Number(id));

    return;
  }
}

export default DeleteCustomerService;
