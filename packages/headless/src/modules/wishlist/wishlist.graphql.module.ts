import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from '../../database/database.resolver';
import { WishListResolver } from './graphql/wishlist.resolver';
import { WishListRepository } from './repositories';
import { IWishListDatabase } from './repositories/wishList.database.interface';
import { WishListService } from './services';
@Module({
  controllers: [],
  providers: [
    WishListResolver,
    WishListService,
    WishListRepository,
    {
      provide: IWishListDatabase,
      useClass: ResolveDatabaseDependency('WISHLIST'),
    },
  ],
})
export class WishListModule {}
