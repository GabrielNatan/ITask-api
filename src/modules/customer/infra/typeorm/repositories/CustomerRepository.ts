import { EntityManager, EntityTarget, QueryRunner, Repository } from 'typeorm';
import Customer from '../entities/Customer';
import { AppDataSource } from '@shared/infra/typeorm';

class CustomerRepository extends Repository<Customer> {
  constructor(
    customer: EntityTarget<Customer>,
    manager: EntityManager,
    queryRunner: QueryRunner | undefined
  ) {
    super(customer, manager, queryRunner);
  }

  public async findById(id: number) {
    return this.findOne({
      where: {
        id,
      },
    });
  }

  public async findByName(first_name: string) {
    return this.findOne({
      where: {
        first_name,
      },
    });
  }

  public async findByEmail(email: string) {
    return this.findOne({
      where: {
        email,
      },
    });
  }
}

export const customerRepository = new CustomerRepository(
  Customer,
  AppDataSource.createEntityManager(),
  AppDataSource.manager.queryRunner
);

export default CustomerRepository;
