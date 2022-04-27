// Mongodb dependency implementations
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';

type CLASS_NAME = 'WISHLIST';
const db = process.env.DATABASE || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
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
