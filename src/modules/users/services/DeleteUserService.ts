import AppError from '@shared/errors/AppError';
import { usersRepository } from '../typeorm/repositories/UsersRepository';
import User from '../typeorm/entities/User';

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
