import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}

  public async execute(id: number): Promise<User> {
    const user = await this.usersRepository.findById(id);
    console.log('NULL ', user);
    if (!user) {
      throw new AppError('User not found.', 404);
    }

    await this.usersRepository.delete(id);

    return user;
  }
}

export default DeleteUserService;
