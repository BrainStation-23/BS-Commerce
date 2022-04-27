import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AuthRepository } from './repositories';
import { IAuthDatabase } from './repositories/auth.database.interface';
import { AuthService } from './services';
import { authConfig } from 'config/auth';
import { AuthResolver } from './graphql/auth.resolver';
import { JwtStrategy } from './guards/jwt-strategy';

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
    AuthRepository,
    {
      provide: IAuthDatabase,
      useClass: ResolveDatabaseDependency('AUTH'),
    },
    JwtStrategy
  ],
})
export class AuthModule {}
