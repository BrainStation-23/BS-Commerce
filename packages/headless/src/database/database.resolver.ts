// Mongodb dependency implementations
import { dbConfig } from 'config/database';
import { CompareDatabase as CompareDatabaseMongo } from './mongodb/compare/index';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user';
import { UserDatabase as UserDatabaseMysql } from './mysql/user/user';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'PRODUCT' | 'COMPARE';
const db = dbConfig.db;

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'USER':
            return UserDatabaseMongo;
          case 'COMPARE':
            return CompareDatabaseMongo;

          default:
            break;
        }
      case 'MYSQL':
        switch (className) {
          case 'USER':
            return UserDatabaseMysql;
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
