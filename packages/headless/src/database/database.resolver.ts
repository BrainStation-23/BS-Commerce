// Mongodb dependency implementations
<<<<<<< HEAD
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { UserAuthDB as UserAuthDBMongo } from './mongodb/user-auth';

type CLASS_NAME = 'PRODUCT' | 'USER_AUTH';
const db = process.env.DATABASE || 'MONGO';
=======
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user';
import { UserDatabase as UserDatabaseMysql } from './mysql/user/user';
import { dbConfig } from 'config/database';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'PRODUCT';
const db = dbConfig.db;
>>>>>>> a21e665f167390885e2c59c0219a77d94c366598

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
<<<<<<< HEAD
          case 'PRODUCT':
            return ProductDatabaseMongo;
          case 'USER_AUTH':
            return UserAuthDBMongo;
=======
          case 'USER':
            return UserDatabaseMongo;
>>>>>>> a21e665f167390885e2c59c0219a77d94c366598

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
