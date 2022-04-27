import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { AuthRepository } from './repositories';
import { IAuthDatabase } from './repositories/auth.database.interface';
import { AuthController } from './rest/auth.controller';
import { AuthService } from './services';
import { authConfig } from 'config/auth';
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
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    {
      provide: IAuthDatabase,
      useClass: ResolveDatabaseDependency('AUTH'),
    },
    JwtStrategy,
  ],
})
export class AuthModule {}
