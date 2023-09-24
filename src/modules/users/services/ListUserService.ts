import User from '../infra/typeorm/entities/User';
import { usersRepository } from '../infra/typeorm/repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const user = await usersRepository.find();

    return user;
  }
}

export default ListUserService;
