import { WishListModule as WishListRestModule } from './modules/wishlist/wishlist.rest.module';
import { BrandModule as BrandRestModule} from './modules/brands/brand.rest.module';

export const ResolveRestModule = () => {
  return [
    WishListRestModule,
    BrandRestModule
  ];
};
