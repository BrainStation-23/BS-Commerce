import { CartModule as CartRestModule } from '../../modules/cart/cart.rest.module';
import { WishListModule as WishListRestModule} from 'src/modules/wishlist/wishlist.rest.module'
import { CategoryModule } from 'src/modules/category/category.rest.module';

export const ResolveRestModule = () => {
  return [
    CartRestModule,
    WishListRestModule,
    CategoryModule,
  ];
};