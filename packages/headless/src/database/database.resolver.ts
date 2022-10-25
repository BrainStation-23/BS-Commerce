// Mongodb dependency implementations
import { BrandDatabase as BrandDatabaseMongo } from './mongodb/brand';
import { BrandDatabase as BrandDatabaseMysql } from './mysql/brand';
import { dbConfig } from 'config/database';
import { CartDatabase as CartDatabaseMongo } from './mongodb/cart';
import { CategoryDatabase as CategoryDatabaseMongo } from './mongodb/category';
import { CompareDatabase as CompareDatabaseMongo } from './mongodb/compare/index';
import { CustomerDatabase as CustomerDatabaseMongo } from './mongodb/customer';
import { ManufacturerDatabase as ManufacturerDatabaseMongo } from './mongodb/manufacturer';
import { OrderDatabase as OrderDatabaseMongo } from './mongodb/order';
import { ProductDatabase as ProductDatabaseMongo } from './mongodb/product';
import { UserDatabase as UserDatabaseMongo } from './mongodb/user';
import { ManufacturerDatabase as ManufacturerDatabaseMysql } from './mysql/manufacturer/manufacturer';
import { UserDatabase as UserDatabaseMysql } from './mysql/user/user';
import { WishListDatabase as WishListDatabaseMongo } from './mongodb/wishList';
import { TagsDatabase as TagsDatabaseMongo } from './mongodb/tags';
import { BranchDatabase as BranchDatabaseMongo } from './mongodb/branch';

import { StoreDatabase as StoreDatabaseMongo } from './mongodb/store';
import { SuperAdminDatabase as SuperAdminDatabaseMongo } from './mongodb/super-admin';

type CLASS_NAME =
  | 'WISHLIST'
  | 'USER'
  | 'PRODUCT'
  | 'MANUFACTURER'
  | 'CATEGORY'
  | 'CART'
  | 'CUSTOMER_AUTH'
  | 'COMPARE'
  | 'MEDIA'
  | 'ORDER'
  | 'BRAND'
  | 'TAGS'
  | 'CUSTOMER'
  | 'BRANCH'
  | 'STORE'
  | 'SUPER_ADMIN';

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
          case 'CUSTOMER':
            return CustomerDatabaseMongo;
          case 'CART':
            return CartDatabaseMongo;
          case 'WISHLIST':
            return WishListDatabaseMongo;
          case 'ORDER':
            return OrderDatabaseMongo;
          case 'TAGS':
            return TagsDatabaseMongo;
          case 'BRANCH':
            return BranchDatabaseMongo;
          case 'STORE':
            return StoreDatabaseMongo;
          case 'SUPER_ADMIN':
            return SuperAdminDatabaseMongo;

          default:
            break;
        }
      case 'MYSQL':
        switch (className) {
          case 'USER':
            return UserDatabaseMysql;
          case 'BRAND':
            return BrandDatabaseMysql;
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
