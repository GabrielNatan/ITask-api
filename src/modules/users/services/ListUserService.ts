import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import { IUserRepository } from '../domain/repositories/IUserRepository';

@injectable()
class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}

  public async execute(): Promise<User[]> {
    const user = (await this.usersRepository.find()) || [];

    return user;
  }
}

export default ListUserService;
