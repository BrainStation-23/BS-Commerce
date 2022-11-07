import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from 'config/auth';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { JwtStrategy } from 'src/guards/jwt-strategy';
import { UserAdminRepository } from './repositories';
import { IUserAdminDatabase } from './repositories/user-admin.db.interface';
import { UserAdminController } from './rest';
import { UserAdminService } from './service';
import { UserAdminHelperService } from './service/helper.service';

@Module({
  imports: [
    JwtModule.register({
      secret: authConfig.jwt_key,
      signOptions: {
        expiresIn: authConfig.expiration_time,
      },
    }),
  ],
  controllers: [UserAdminController],
  providers: [
    UserAdminService,
    UserAdminHelperService,
    UserAdminRepository,
    {
      provide: IUserAdminDatabase,
      useClass: ResolveDatabaseDependency('USER_ADMIN'),
    },
    JwtStrategy
  ],
})
export class UserAdminModule {}
