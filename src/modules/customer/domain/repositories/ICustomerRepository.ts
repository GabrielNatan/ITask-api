import { ICustomer } from '../models/ICustomer';

export interface ICustomerRepository {
  findById(id: number): Promise<ICustomer | undefined>;
}
