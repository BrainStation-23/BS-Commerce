import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { WishListController } from './controllers';
import { WishListMiddleware } from './middleware/wishList.middleware';
import { WishListRepository } from './repositories';
import { IWishListDatabase } from './repositories/wishList.database.interface';
import { WishListService } from './services';
@Module({
  controllers: [WishListController],
  providers: [
    WishListService,
    WishListRepository,
    {
      provide: IWishListDatabase,
      useClass: ResolveDatabaseDependency('WISHLIST'),
    },
  ],
})
export class WishListModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(WishListMiddleware).forRoutes(WishListController);
  }
}
