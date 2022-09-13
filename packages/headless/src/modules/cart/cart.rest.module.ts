import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { CartRepository } from './repositories';
import { ICartDatabase } from './repositories/cart.database.interface';
import { CartController } from './rest/cart.controller';
import { CartService } from './services';

@Module({
  controllers: [CartController],
  providers: [
    CartService,
    CartRepository,
    { provide: ICartDatabase, useClass: ResolveDatabaseDependency('CART') },
  ],
})
export class CartModule {}
