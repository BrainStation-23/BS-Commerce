import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from 'config/auth';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { JwtStrategy } from 'src/guards/jwt-strategy';
import { SuperAdminRepository } from './repositories';
import { ISuperAdminDatabase } from './repositories/super-admin.db.interface';
import { SuperAdminController } from './rest';
import { SuperAdminService } from './service';
import { SuperAdminHelperService } from './service/helper.service';

@Module({
  imports: [
    JwtModule.register({
      secret: authConfig.jwt_key,
      signOptions: {
        expiresIn: authConfig.expiration_time,
      },
    }),
  ],
  controllers: [SuperAdminController],
  providers: [
    SuperAdminService,
    SuperAdminHelperService,
    SuperAdminRepository,
    {
      provide: ISuperAdminDatabase,
      useClass: ResolveDatabaseDependency('SUPER_ADMIN'),
    },
    JwtStrategy
  ],
})
export class SuperAdminModule {}
