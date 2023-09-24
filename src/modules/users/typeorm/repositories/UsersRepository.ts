import { EntityManager, EntityTarget, QueryRunner, Repository } from 'typeorm';
import User from '../entities/User';
import { AppDataSource } from '@shared/infra/typeorm';

class UsersRepository extends Repository<User> {
  constructor(
    user: EntityTarget<User>,
    manager: EntityManager,
    queryRunner: QueryRunner | undefined
  ) {
    super(user, manager, queryRunner);
  }

  public async findByName(name: string): Promise<User[] | undefined> {
    return this.find({
      where: {
        first_name: name,
      },
    });
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = this.findOne({ where: { email } });
    return user;
  }

  public async findById(id: number): Promise<User | null> {
    const user = await this.findOne({ where: { id } });
    return user;
  }
}

export const usersRepository = new UsersRepository(
  User,
  AppDataSource.createEntityManager(),
  AppDataSource.manager.queryRunner
);

export default UsersRepository;
