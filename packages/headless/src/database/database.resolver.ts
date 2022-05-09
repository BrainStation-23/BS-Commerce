// Mongodb dependency implementations
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user'
import { dbConfig } from 'config/database';
import { CartDatabase as CartDatabaseMongo } from './mongodb/cart';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'CART';
const db = dbConfig.db || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'WISHLIST':
            return WishListDatabaseMongo;
          case 'USER':
            return UserDatabaseMongo;
          case 'CART':
            return CartDatabaseMongo;  

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
