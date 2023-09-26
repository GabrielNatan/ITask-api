import AppError from '@shared/errors/AppError';
import {} from '../infra/typeorm/repositories/UsersRepository';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { IUser } from '../domain/models/IUser';

interface IResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@injectable()
class UpdateUserServices {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}
  public async execute({
    id,
    first_name,
    last_name,
    email,
    password,
  }: IResponse): Promise<undefined> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    await this.usersRepository.update(id, {
      last_name,
      first_name,
      email,
      password,
    } as IUser);

    return;
  }
}

export default UpdateUserServices;
