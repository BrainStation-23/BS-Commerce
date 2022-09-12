import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { UserRepository } from 'src/modules/user/repositories';
import { IUserDatabase } from 'src/modules/user/repositories/user.database.interface';
import { AuthController } from './rest';
import { AuthService } from './services';
import { JwtStrategy } from 'src/guards/jwt-strategy';
import { authConfig } from 'config/auth';

@Module({
  imports: [
    JwtModule.register({
      secret: authConfig.jwt_key,
      signOptions: {
        expiresIn: authConfig.expiration_time,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    {
      provide: IUserDatabase,
      useClass: ResolveDatabaseDependency('USER'),
    },
    JwtStrategy,
  ],
})
export class AuthModule {}
