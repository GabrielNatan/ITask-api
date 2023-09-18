import AppError from '@shared/errors/AppError';
import { usersRepository } from '../typeorm/repositories/UsersRepository';
import User from '../typeorm/entities/User';

interface IRequest {
  id: number;
}

class ShowUserService {
  public async execute({ id }: IRequest): Promise<User> {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    return user;
  }
}

export default ShowUserService;
