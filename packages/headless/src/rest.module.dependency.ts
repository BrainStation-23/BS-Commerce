import { HelperModule } from './helper/helper.module';
import { WishListModule as WishListRestModule } from './modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    HelperModule,
    WishListRestModule
  ];
};
