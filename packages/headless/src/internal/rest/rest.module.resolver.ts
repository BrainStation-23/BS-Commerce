import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { ProductModule } from 'src/modules/product/product.rest.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    WishListModule,
    AuthModule,
    ProductModule
  ];
};
