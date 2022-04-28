// Mongodb dependency implementations
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user';
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { dbConfig } from 'config/database';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'PRODUCT';
const db = dbConfig.db;

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'WISHLIST':
            return WishListDatabaseMongo;
          case 'USER':
            return UserDatabaseMongo;
          case 'PRODUCT':
            return ProductDatabaseMongo;

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
