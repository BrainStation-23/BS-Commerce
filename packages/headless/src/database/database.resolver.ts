// Mongodb dependency implementations
// import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
// import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { BrandDatabase as BrandDatabaseMongo } from './mongodb/brand';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user/user'
import { BrandDatabase as BrandDatabaseMySql } from './mysql/brand';
import { dbConfig } from 'config/database';

type CLASS_NAME = 'WISHLIST' | 'USER' | 'BRAND' ;
const db = dbConfig.db || 'MONGO';

export function ResolveDatabaseDependency(className: CLASS_NAME) {
  try {
    switch (db) {
      case 'MONGO':
        switch (className) {
          case 'BRAND':
              return BrandDatabaseMongo;
          // case 'WISHLIST':
          //   return WishListDatabaseMongo;
          case 'USER':
            return UserDatabaseMongo;

          default:
            break;
        }
      case 'MYSQL': 
        switch(className){
          case 'BRAND':
            return BrandDatabaseMySql;
        }
      default:
        throw new Error('No dependency implementation found');
    }
  } catch (err) {
    console.error('Error resolving database dependency');
  }
}
