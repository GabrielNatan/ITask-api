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
}

export const usersRepository = new UsersRepository(
  User,
  AppDataSource.createEntityManager(),
  AppDataSource.manager.queryRunner
);

export default UsersRepository;
