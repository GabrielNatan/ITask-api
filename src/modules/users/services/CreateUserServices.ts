import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';

interface IResponse {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ) {}

  public async execute({
    first_name,
    last_name,
    email,
    password,
  }: IResponse): Promise<User> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email exists', 400);
    }

    const user = this.usersRepository.create({
      first_name,
      last_name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
