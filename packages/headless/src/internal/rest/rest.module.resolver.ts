import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.rest.module';
import { CartModule as CartRestModule } from '../../modules/cart/cart.rest.module';

export const ResolveRestModule = () => {
  return [
    CartRestModule,
    WishListModule,
    AuthModule,
  ];
};

