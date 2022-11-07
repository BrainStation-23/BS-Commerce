import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { RoleRepository } from './repositories';
import { IRoleDatabase } from './repositories/role.database.interface';
import { RoleController } from './rest';
import { RoleService } from './services';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    RoleRepository,
    {
      provide: IRoleDatabase,
      useClass: ResolveDatabaseDependency('ROLE'),
    },
  ],
})
export class SuperAdminRoleModule {}
