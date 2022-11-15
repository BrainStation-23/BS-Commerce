import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { authConfig } from 'config/auth';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { JwtStrategy } from 'src/guards/jwt-strategy';
import { StoreAdminRepository } from './repositories';
import { IStoreAdminDatabase } from './repositories/store-admin.db.interface';
import { StoreAdminController } from './rest';
import { StoreAdminService } from './service';
import { StoreAdminHelperService } from './service/helper.service';

@Module({
  imports: [
    JwtModule.register({
      secret: authConfig.jwt_key,
      signOptions: {
        expiresIn: authConfig.expiration_time,
      },
    }),
  ],
  controllers: [StoreAdminController],
  providers: [
    StoreAdminService,
    StoreAdminHelperService,
    StoreAdminRepository,
    {
      provide: IStoreAdminDatabase,
      useClass: ResolveDatabaseDependency('STORE_ADMIN'),
    },
    JwtStrategy
  ],
})
export class StoreAdminModule {}
