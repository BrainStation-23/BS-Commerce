import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CustomerAuthService } from './services';
import { customerAuthConfig } from 'config/auth';
import { AuthResolver } from './graphql/auth.resolver';
import { JwtStrategy } from './guards/jwt-strategy';
import { UserRepository } from 'src/modules/user/repositories';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';

@Module({
  imports: [
    JwtModule.register({
      secret: customerAuthConfig.jwt_key!,
      signOptions: {
        expiresIn: customerAuthConfig.expiration_time!,
      },
    }),
  ],
  controllers: [],
  providers: [
    AuthResolver,
    CustomerAuthService,
    UserRepository,
    {
      provide: IUserDatabase,
      useClass: ResolveDatabaseDependency('USER'),
    },
    JwtStrategy,
  ],
})
export class CustomerAuthModule { }