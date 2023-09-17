import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYED = 'employed',
}

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  first_name: string;

  @Column('varchar')
  last_name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.EMPLOYED,
  })
  role: UserRole;

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

export default User;
