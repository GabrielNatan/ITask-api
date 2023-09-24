import { IUser } from '../models/IUser';

export interface IUserRepository {
  findById(id: number): Promise<IUser | undefined>;
}
