import { IUser } from '../models/IUser';
import { IUserCreate } from '../models/IUserCreate';

export interface IUserRepository {
  findByName(id: string): Promise<IUser[] | null>;
  findByEmail(id: string): Promise<IUser | null>;
  findById(id: number): Promise<IUser | null>;
  create(data: IUserCreate): Promise<IUser>;
}
