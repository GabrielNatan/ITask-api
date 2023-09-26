import { Repository } from 'typeorm';
import Customer from '../entities/Customer';
import { AppDataSource } from '@shared/infra/typeorm';
import { ICustomerRepository } from '@modules/customer/domain/repositories/ICustomerRepository';
import { ICustomer } from '@modules/customer/domain/models/ICustomer';
import { ICreateCustomer } from '@modules/customer/domain/models/ICreateCustomer';

class CustomerRepository implements ICustomerRepository {
  private ormRepository: Repository<Customer>;
  constructor() {
    this.ormRepository = AppDataSource.getRepository(Customer);
  }

  public async find(): Promise<ICustomer[] | null> {
    return this.ormRepository.find();
  }

  public async update(id: number, data: ICustomer): Promise<undefined> {
    this.ormRepository.update(id, data);
  }

  public async delete(id: number): Promise<undefined> {
    this.ormRepository.delete(id);
  }

  public async save(data: ICustomer): Promise<undefined> {
    this.ormRepository.save(data);
  }

  public async findById(id: number): Promise<ICustomer | null> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async findByName(first_name: string): Promise<ICustomer | null> {
    return this.ormRepository.findOne({
      where: {
        first_name,
      },
    });
  }

  public async findByEmail(email: string): Promise<ICustomer | null> {
    return this.ormRepository.findOne({
      where: {
        email,
      },
    });
  }

  public async create({
    email,
    first_name,
    last_name,
    password,
  }: ICreateCustomer): Promise<ICustomer> {
    const customer = this.ormRepository.create({
      email,
      first_name,
      last_name,
      password,
    });

    await this.ormRepository.save(customer);

    return customer;
  }
}

export const customerRepository = new CustomerRepository();

export default CustomerRepository;
