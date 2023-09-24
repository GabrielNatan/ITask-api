import { IUserRole } from './IUserRole';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active: boolean;
  role: IUserRole;
  created_at: Date;
  updated_at: Date;
}
