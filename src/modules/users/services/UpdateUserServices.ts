import AppError from '@shared/errors/AppError';
import { usersRepository } from '../infra/typeorm/repositories/UsersRepository';

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
  }: IResponse): Promise<undefined> {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    await usersRepository.update(id, {
      last_name,
      first_name,
      email,
      password,
    });

    return;
  }
}

export default UpdateUserServices;
