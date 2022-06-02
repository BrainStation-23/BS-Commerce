// Mongodb dependency implementations
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user';
import { BrandDatabase as BrandDatabaseMongo } from './mongodb/brand';
import { UserDatabase as UserDatabaseMysql } from './mysql/user/user';
import { BrandDatabase as BrandDatabaseMysql } from './mysql/brand';
import { dbConfig } from 'config/database';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'PRODUCT' | 'BRAND';
const db = dbConfig.db;

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'USER':
            return UserDatabaseMongo;
          case 'BRAND':
              return BrandDatabaseMongo;

          default:
            break;
        }
      case 'MYSQL':
        switch (className) {
          case 'USER':
            return UserDatabaseMysql;
          case 'BRAND':
            return BrandDatabaseMysql;
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
