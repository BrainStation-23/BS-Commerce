// Mongodb dependency implementations
import { BrandDatabase as BrandDatabaseMongo } from './mongodb/brand';
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { UserAuthDB as UserAuthDBMongo } from './mongodb/user-auth';

type CLASS_NAME = 'PRODUCT' | 'USER_AUTH' | 'BRAND';
const db = process.env.DATABASE || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'PRODUCT':
            return ProductDatabaseMongo;
          case 'USER_AUTH':
            return UserAuthDBMongo;
          case 'BRAND':
            return BrandDatabaseMongo;

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
