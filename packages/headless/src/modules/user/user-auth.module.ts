import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { HelperService } from 'src/helper/helper.service';
import { UserAuthController } from './controllers/auth.controller';
import { UserProfileController } from './controllers/profile.controller';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserRepository } from './repository';
import { IUserDB } from './repository/user.db.interface';
import { UserAuthService } from './services/user-auth.service';
import { UserProfileService } from './services/user-profile.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [UserAuthController, UserProfileController],
  providers: [
    UserAuthService,
    UserRepository,
    UserProfileService,
    HelperService,
    JwtStrategy,
    { provide: IUserDB, useClass: ResolveDatabaseDependency('USER') },
  ],
})
export class UserModule {}
