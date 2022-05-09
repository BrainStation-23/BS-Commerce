// Mongodb dependency implementations
// import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { BrandDatabase as BrandDatabaseMongo } from './mongodb/brand';


type CLASS_NAME = 'BRAND' | 'WISHLIST';
const db = process.env.DATABASE || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          // case 'PRODUCT':
          //   return ProductDatabaseMongo;
          case 'BRAND':
              return BrandDatabaseMongo;
          case 'WISHLIST':
            return WishListDatabaseMongo;

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
