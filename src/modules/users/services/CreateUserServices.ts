import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import { usersRepository } from '../typeorm/repositories/UsersRepository';

interface IResponse {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    first_name,
    last_name,
    email,
    password,
  }: IResponse): Promise<User> {
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email exists', 400);
    }

    const user = usersRepository.create({
      first_name,
      last_name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;