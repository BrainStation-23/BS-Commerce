import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AuthService } from './services';
import { adminAuthConfig } from 'config/auth';
import { AuthResolver } from './graphql/auth.resolver';
import { AdminJwtStrategy } from './guards/jwt-strategy';
import { AdminRepository } from 'src/modules/admin/repositories';
import { IAdminDatabase } from 'src/modules/admin/repositories/admin.database.interface';

@Module({
  imports: [
    JwtModule.register({
      secret: adminAuthConfig.jwt_key!,
      signOptions: {
        expiresIn: adminAuthConfig.expiration_time!,
      },
    }),
  ],
  controllers: [],
  providers: [
    AuthResolver,
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