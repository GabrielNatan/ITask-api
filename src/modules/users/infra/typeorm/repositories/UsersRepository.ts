import User from '../entities/User';
import { AppDataSource } from '@shared/infra/typeorm';
import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';
import { Repository } from 'typeorm';
import { IUserCreate } from '@modules/users/domain/models/IUserCreate';
import { IUser } from '@modules/users/domain/models/IUser';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async find(): Promise<IUser[] | null> {
    return this.ormRepository.find();
  }

  public async delete(id: number): Promise<undefined> {
    this.ormRepository.delete(id);
    return;
  }

  public async update(id: number, data: IUser): Promise<undefined> {
    this.ormRepository.update(id, data);
    return;
  }

  public async save(data: IUser): Promise<undefined> {
    this.ormRepository.save(data);
    return;
  }

  public async findByName(name: string): Promise<User[] | null> {
    return this.ormRepository.find({
      where: {
        first_name: name,
      },
    });
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = this.ormRepository.findOne({ where: { email } });
    return user;
  }

  public async findById(id: number): Promise<User | null> {
    const user = await this.ormRepository.findOne({ where: { id } });
    return user;
  }

  public async create({
    first_name,
    last_name,
    role,
    email,
    password,
  }: IUserCreate): Promise<User> {
    const user = this.ormRepository.create({
      email,
      first_name,
      last_name,
      password,
      role,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export const usersRepository = new UsersRepository();

export default UsersRepository;
