import { usersRepository } from '../typeorm/repositories/UsersRepository';
import User from '../typeorm/entities/User';

class ListUserService {
  public async execute(): Promise<User[]> {
    const user = await usersRepository.find();

    return user;
  }
}

export default ListUserService;
