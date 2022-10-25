import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { SuperAdminRepository } from './repositories';
import { ISuperAdminDatabase } from './repositories/super-admin.db.interface';
import { SuperAdminController } from './rest';
import { SuperAdminService } from './service';

@Module({
  controllers: [SuperAdminController],
  providers: [
    SuperAdminService,
    SuperAdminRepository,
    {
      provide: ISuperAdminDatabase,
      useClass: ResolveDatabaseDependency('SUPER_ADMIN'),
    },
  ],
})
export class SuperAdminModule {}
