import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { UserRepository } from 'src/modules/user/repositories';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
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
    }
  ],
})
export class UserModule { }
