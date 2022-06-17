import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CustomerAuthService } from './services';
import { customerAuthConfig } from 'config/auth';
import { CustomerAuthResolver } from './graphql/auth.resolver';
import { JwtStrategy } from './guards/jwt-strategy';
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
  controllers: [],
  providers: [
    CustomerAuthResolver,
    CustomerAuthService,
    CustomerRepository,
    {
      provide: ICustomerDatabase,
      useClass: ResolveDatabaseDependency('CUSTOMER_AUTH'),
    },
    JwtStrategy,
  ],
})
export class CustomerAuthModule { }