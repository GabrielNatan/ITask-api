import { ICustomer } from '@modules/customer/domain/models/ICustomer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customer')
class Customer implements ICustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  first_name: string;

  @Column('varchar')
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Customer;
