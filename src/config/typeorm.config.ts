import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kzoeps',
  password: 'postgres',
  database: 'wkinga',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
