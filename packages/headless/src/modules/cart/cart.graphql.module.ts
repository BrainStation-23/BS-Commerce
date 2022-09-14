import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CartResolver } from './graphql/cart.resolver';
import { CartRepository } from './repositories';
import { ICartDatabase } from './repositories/cart.database.interface';
import { CartService } from './services';

@Module({
  controllers: [],
  providers: [
    CartResolver,
    CartService,
    CartRepository,
    { provide: ICartDatabase, useClass: ResolveDatabaseDependency('CART') },
  ],
})
export class CartModule {}
