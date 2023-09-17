import { EntityManager, EntityTarget, QueryRunner, Repository } from 'typeorm';
import User from '../entities/User';
import { AppDataSource } from '@shared/typeorm';

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

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.findBy({ email }).then((res) => res[0]) || undefined;
    return user;
  }

  public async findById(id: number): Promise<User | undefined> {
    const user = this.findBy({ id }).then((res) => res[0]) || undefined;
    return user;
  }
}

export const usersRepository = new UsersRepository(
  User,
  AppDataSource.createEntityManager(),
  AppDataSource.manager.queryRunner
);

export default UsersRepository;
