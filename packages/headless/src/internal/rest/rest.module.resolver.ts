import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { BrandModule } from 'src/modules/brands/brand.rest.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    BrandModule,
    WishListModule,
    AuthModule
  ];
};
