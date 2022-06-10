// Mongodb dependency implementations
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user';
import { UserDatabase as UserDatabaseMysql } from './mysql/user/user';
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { ManufacturerDatabase as ManufacturerDatabaseMongo } from './mongodb/manufacturer';
import { ManufacturerDatabase as ManufacturerDatabaseMysql } from './mysql/manufacturer/manufacturer';
import { dbConfig } from 'config/database';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'PRODUCT' | 'MANUFACTURER';
const db = dbConfig.db;

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'USER':
            return UserDatabaseMongo;
          case 'PRODUCT':
            return ProductDatabaseMongo;
          case 'MANUFACTURER':
            return ManufacturerDatabaseMongo;

          default:
            break;
        }
      case 'MYSQL':
        switch (className) {
          case 'USER':
            return UserDatabaseMysql;
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
