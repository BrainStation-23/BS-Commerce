import { Module } from '@nestjs/common';
import { ResolveDatabaseDependency } from 'src/database/database.resolver';
import { WishListRepository } from './repositories';
import { IWishListDatabase } from './repositories/wishList.database.interface';
import { WishListController } from './rest';
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
export class WishListModule {}
