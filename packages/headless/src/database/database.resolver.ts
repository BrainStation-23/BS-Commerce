// Mongodb dependency implementations
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { CartDatabase as CartDatabaseMongo } from './mongodb/cart';
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { CategoryDatabase as CategoryDatabaseMongo } from './mongodb/category';

type CLASS_NAME = 'PRODUCT' | 'CART' | 'WISHLIST' | 'CATEGORY';
const db = process.env.DATABASE || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'PRODUCT':
            return ProductDatabaseMongo;
          case 'CART':
            return CartDatabaseMongo;
          case 'WISHLIST':
            return WishListDatabaseMongo;
          case 'CATEGORY':
              return CategoryDatabaseMongo;

          default:
            break;
        }
      // case 'MYSQL':
      //   switch (className) {

      //     default:
      //       break;
      //   }

      default:
        throw new Error('No dependency implementation found');
    }
  } catch (err) {
    console.error('Error resolving database dependency');
  }
}
