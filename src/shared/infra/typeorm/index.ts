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
  entities: ['src/modules/*/infra/typeorm/entities/*'],
  subscribers: [],
  migrations: ['src/shared/typeorm/infra/migrations/*.ts'],
  migrationsTableName: 'migrations_typeorm',
});
