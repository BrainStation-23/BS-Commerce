import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CustomerAuthService } from './services';
import { authConfig } from 'config/auth';
import { CustomerAuthResolver } from './graphql/auth.resolver';
import { ICustomerDatabase } from '../customer/repositories/customer.database.interface';
import { CustomerRepository } from '../customer/repositories';
import { JwtStrategy } from 'src/guards/jwt-strategy';

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