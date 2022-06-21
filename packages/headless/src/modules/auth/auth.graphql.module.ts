import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AuthService } from './services';
import { adminAuthConfig } from 'config/auth';
import { AuthResolver } from './graphql/auth.resolver';
import { JwtStrategy } from './guards/jwt-strategy';
import { UserRepository } from 'src/modules/user/repositories';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';

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
    UserRepository,
    {
      provide: IUserDatabase,
      useClass: ResolveDatabaseDependency('USER'),
    },
    JwtStrategy,
  ],
})
export class AuthModule { }