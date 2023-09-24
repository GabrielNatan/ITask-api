import AppError from '@shared/errors/AppError';
import { usersRepository } from '../infra/typeorm/repositories/UsersRepository';
import { UpdateResult } from 'typeorm';

interface IResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

class UpdateUserServices {
  public async execute({
    id,
    first_name,
    last_name,
    email,
    password,
  }: IResponse): Promise<UpdateResult> {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    const userUpdate = await usersRepository.update(id, {
      last_name,
      first_name,
      email,
      password,
    });

    return userUpdate;
  }
}

export default UpdateUserServices;
