// Mongodb dependency implementations
import { dbConfig } from 'config/database';
import { CompareDatabase as CompareDatabaseMongo } from './mongodb/compare';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user';
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'COMPARE';
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
          case 'COMPARE':
            return CompareDatabaseMongo;

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
