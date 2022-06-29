import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AdminRepository } from 'src/modules/admin/repositories';
import { IAdminDatabase } from 'src/modules/admin/repositories/admin.database.interface';
import { AuthController } from './rest';
import { AuthService } from './services';
import { adminAuthConfig } from 'config/auth';
import { AdminJwtStrategy } from './guards/jwt-strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: adminAuthConfig.jwt_key!,
      signOptions: {
        expiresIn: adminAuthConfig.expiration_time!,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AdminRepository,
    {
      provide: IAdminDatabase,
      useClass: ResolveDatabaseDependency('ADMIN'),
    },
    AdminJwtStrategy,
  ],
})
export class AuthModule { }