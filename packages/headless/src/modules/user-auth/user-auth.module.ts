import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { UserRegisterController } from './controllers/register.controller';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserAuthRepository } from './repository';
import { IUserAuthDB } from './repository/user.db.interface';
import { UserAuthService } from './services/user.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: '#bs23',
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [UserRegisterController],
  providers: [
    UserAuthService,
    UserAuthRepository,
    JwtStrategy,
    { provide: IUserAuthDB, useClass: ResolveDatabaseDependency('USER_AUTH') },
  ],
})
export class UserAuthModule {}
