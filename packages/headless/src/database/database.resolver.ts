// Mongodb dependency implementations
import { CartDatabase as CartDatabaseMongo } from './mongodb/cart';
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user'
import { dbConfig } from 'config/database';

type CLASS_NAME ='CART' | 'WISHLIST' | 'USER';
const db = dbConfig.db;

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'CART':
            return CartDatabaseMongo;
          case 'WISHLIST':
            return WishListDatabaseMongo;
          case 'USER':
            return UserDatabaseMongo;

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
