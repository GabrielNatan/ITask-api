import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { usersRepository } from '../infra/typeorm/repositories/UsersRepository';

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
