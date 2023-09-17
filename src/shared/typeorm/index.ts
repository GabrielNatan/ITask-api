import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: ['src/modules/*/typeorm/entities/*'],
  subscribers: [],
  migrations: ['src/shared/typeorm/migrations/*.ts'],
  migrationsTableName: 'migrations_typeorm',
});
