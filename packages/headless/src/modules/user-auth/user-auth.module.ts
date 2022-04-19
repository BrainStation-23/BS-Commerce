import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { HelperService } from 'src/helper/helper.service';
import { UserAuthController } from './controllers/auth.controller';
import { UserProfileController } from './controllers/profile.controller';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserAuthRepository } from './repository';
import { IUserAuthDB } from './repository/user.db.interface';
import { UserAuthService } from './services/user-auth.service';
import { UserProfileService } from './services/user-profile.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: '#bs23',
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [UserAuthController, UserProfileController],
  providers: [
    UserAuthService,
    UserAuthRepository,
    UserProfileService,
    HelperService,
    JwtStrategy,
    { provide: IUserAuthDB, useClass: ResolveDatabaseDependency('USER_AUTH') },
  ],
})
export class UserAuthModule {}
