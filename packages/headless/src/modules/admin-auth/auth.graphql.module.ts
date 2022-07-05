import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AuthService } from './services';
import { authConfig } from 'config/auth';
import { AuthResolver } from './graphql/auth.resolver';
import { AdminRepository } from 'src/modules/admin/repositories';
import { IAdminDatabase } from 'src/modules/admin/repositories/admin.database.interface';
import { JwtStrategy } from 'src/guards/jwt-strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: authConfig.jwt_key!,
      signOptions: {
        expiresIn: authConfig.expiration_time!,
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
    JwtStrategy,
  ],
})
export class AdminAuthModule { }