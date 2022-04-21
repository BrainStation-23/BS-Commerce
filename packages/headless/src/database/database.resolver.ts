// Mongodb dependency implementations
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { UserAuthDB as UserAuthDBMongo } from './mongodb/user';

type CLASS_NAME = 'PRODUCT' | 'USER';
const db = process.env.DATABASE || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'PRODUCT':
            return ProductDatabaseMongo;
          case 'USER':
            return UserAuthDBMongo;

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
