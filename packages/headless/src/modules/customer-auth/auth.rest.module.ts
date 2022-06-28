import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CustomerAuthController } from './rest';
import { CustomerAuthService } from './services';
import { customerAuthConfig } from 'config/auth';
import { CustomerJwtStrategy } from './guards/jwt-strategy';
import { ICustomerDatabase } from '../customer/repositories/customer.database.interface';
import { CustomerRepository } from '../customer/repositories';

@Module({
  imports: [
    JwtModule.register({
      secret: customerAuthConfig.jwt_key!,
      signOptions: {
        expiresIn: customerAuthConfig.expiration_time!,
      },
    }),
  ],
  controllers: [CustomerAuthController],
  providers: [
    CustomerAuthService,
    CustomerRepository,
    {
      provide: ICustomerDatabase,
      useClass: ResolveDatabaseDependency('CUSTOMER_AUTH'),
    },
    CustomerJwtStrategy,
  ],
})
export class CustomerAuthModule { }