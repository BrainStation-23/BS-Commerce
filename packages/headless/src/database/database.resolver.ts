// Mongodb dependency implementations
import { dbConfig } from 'config/database';
import { AdminDatabase as AdminDatabaseMongo } from './mongodb/admin';
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { CartDatabase as CartDatabaseMongo } from './mongodb/cart';
import { CategoryDatabase as CategoryDatabaseMongo } from './mongodb/category';
import { CompareDatabase as CompareDatabaseMongo } from './mongodb/compare/index';
import { ManufacturerDatabase as ManufacturerDatabaseMongo } from './mongodb/manufacturer';
import { CustomerDatabase as CustomerDatabaseMongo } from './mongodb/customer';
import { ManufacturerDatabase as ManufacturerDatabaseMysql } from './mysql/manufacturer/manufacturer';
import { AdminDatabase as AdminDatabaseMysql } from './mysql/admin/admin';

type CLASS_NAME =
  'WISHLIST'
  | 'ADMIN'
  | 'PRODUCT'
  | 'MANUFACTURER'
  | 'CATEGORY'
  | 'CART'
  | 'CUSTOMER_AUTH'
  | 'COMPARE'
  | 'MEDIA';

const db = dbConfig.db;

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'ADMIN':
            return AdminDatabaseMongo;
          case 'COMPARE':
            return CompareDatabaseMongo;
          case 'PRODUCT':
            return ProductDatabaseMongo;
          case 'MANUFACTURER':
            return ManufacturerDatabaseMongo;
          case 'CATEGORY':
            return CategoryDatabaseMongo;
          case 'CUSTOMER_AUTH':
            return CustomerDatabaseMongo;
          case 'CART':
            return CartDatabaseMongo;

          default:
            break;
        }
      case 'MYSQL':
        switch (className) {
          case 'ADMIN':
            return AdminDatabaseMysql;
          case 'MANUFACTURER':
            return ManufacturerDatabaseMysql;

          default:
            break;
        }

      default:
        throw new Error('No dependency implementation found');
    }
  } catch (err) {
    console.error('Error resolving database dependency');
  }
}
