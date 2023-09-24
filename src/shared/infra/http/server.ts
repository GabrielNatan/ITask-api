import { AppDataSource } from '@shared/infra/typeorm';
import { app } from './app';

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('App runner');
  });
});
