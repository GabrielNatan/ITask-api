import { IUserRole } from './IUserRole';

export interface IUserCreate {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  role?: IUserRole;
}
