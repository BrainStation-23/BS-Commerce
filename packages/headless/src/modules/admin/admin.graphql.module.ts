import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AdminRepository } from 'src/modules/admin/repositories';
import { IAdminDatabase } from 'src/modules/admin/repositories/admin.database.interface';
import { UserResolver } from './graphql/admin.resolver';
import { UserService } from './services';

@Module({
  controllers: [],
  providers: [
    UserResolver,
    UserService,
    AdminRepository,
    {
      provide: IAdminDatabase,
      useClass: ResolveDatabaseDependency('ADMIN'),
    }
  ],
})
export class UserModule { }