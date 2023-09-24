import AppError from '@shared/errors/AppError';
import { customerRepository } from '../infra/typeorm/repositories/CustomerRepository';

interface IResponse {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IResponse): Promise<undefined> {
    const customerExists = await customerRepository.findById(Number(id));

    if (!customerExists) {
      throw new AppError('Customer not found', 404);
    }

    await customerRepository.delete(id);

    return;
  }
}

export default DeleteCustomerService;
