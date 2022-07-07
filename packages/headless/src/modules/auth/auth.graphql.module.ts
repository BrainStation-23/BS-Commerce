import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AuthService } from './services';
import { authConfig } from 'config/auth';
import { AuthResolver } from './graphql/auth.resolver';
import { UserRepository } from 'src/modules/user/repositories';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
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
    UserRepository,
    {
      provide: IUserDatabase,
      useClass: ResolveDatabaseDependency('USER'),
    },
    JwtStrategy,
  ],
})
export class AuthModule { }