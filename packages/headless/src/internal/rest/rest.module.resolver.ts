import { WishListModule as WishListRestModule } from 'src/modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    WishListRestModule,
  ];
};
