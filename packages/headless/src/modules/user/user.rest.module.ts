import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { UserRepository } from './repositories';
import { IUserDatabase } from './repositories/user.database.interface';
import { UserController } from './rest';
import { UserService } from './services';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    {
      provide: IUserDatabase,
      useClass: ResolveDatabaseDependency('USER'),
    },
  ],
})
export class UserModule { }
