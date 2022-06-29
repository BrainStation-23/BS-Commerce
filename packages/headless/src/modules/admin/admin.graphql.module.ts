import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AdminRepository } from 'src/modules/admin/repositories';
import { IAdminDatabase } from 'src/modules/admin/repositories/admin.database.interface';
import { AdminResolver } from './graphql/admin.resolver';
import { AdminService } from './services';

@Module({
  controllers: [],
  providers: [
    AdminResolver,
    AdminService,
    AdminRepository,
    {
      provide: IAdminDatabase,
      useClass: ResolveDatabaseDependency('ADMIN'),
    }
  ],
})
export class UserModule { }