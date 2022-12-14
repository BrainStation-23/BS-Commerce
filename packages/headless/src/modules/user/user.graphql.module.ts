import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from '../../database/database.resolver';
import { UserRepository } from '../../modules/user/repositories';
import { IUserDatabase } from '../../modules/user/repositories/user.database.interface';
import { UserResolver } from './graphql/user.resolver';
import { UserService } from './services';

@Module({
  controllers: [],
  providers: [
    UserResolver,
    UserService,
    UserRepository,
    {
      provide: IUserDatabase,
      useClass: ResolveDatabaseDependency('USER'),
    },
  ],
})
export class UserModule {}
