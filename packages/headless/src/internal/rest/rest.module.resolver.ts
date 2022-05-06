import { ManufacturerModule } from 'src/modules/manufacturer/manufacturer.rest.module';
import { AuthModule } from 'src/modules/auth/auth.rest.module';
import { WishListModule } from 'src/modules/wishlist/wishlist.rest.module';

export const ResolveRestModule = () => {
  return [
    ManufacturerModule,
    WishListModule,
    AuthModule
  ];
};
