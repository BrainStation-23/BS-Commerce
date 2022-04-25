import { WishListModule as WishListRestModule } from './modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    WishListRestModule,
  ];
};
