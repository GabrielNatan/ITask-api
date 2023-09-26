import { ICreateCustomer } from '../models/ICreateCustomer';
import { ICustomer } from '../models/ICustomer';

export interface ICustomerRepository {
  findById(id: number): Promise<ICustomer | null>;
  findByName(first_name: string): Promise<ICustomer | null>;
  findByEmail(email: string): Promise<ICustomer | null>;
  find(): Promise<ICustomer[] | null>;
  create(data: ICreateCustomer): Promise<ICustomer>;
  delete(id: number): Promise<undefined>;
  update(id: number, data: ICustomer): Promise<undefined>;
  save(data: ICustomer): Promise<undefined>;
}
