export interface ICustomer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}
