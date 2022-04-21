import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { WishListResolver } from './graphql/wishlist.resolver';
import { WishListRepository } from './repositories';
import { IWishListDatabase } from './repositories/wishList.database.interface';
import { WishListController as WishListGraphqlController } from './graphql/wishlist.controller';
import { WishListService } from './services';
@Module({
  controllers: [WishListGraphqlController],
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
