import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { usersRepository } from '../infra/typeorm/repositories/UsersRepository';

class DeleteUserService {
  public async execute(id: number): Promise<User> {
    const user = await usersRepository.findById(id);
    console.log('NULL ', user);
    if (!user) {
      throw new AppError('User not found.', 404);
    }

    await usersRepository.delete({ id });

    return user;
  }
}

export default DeleteUserService;
