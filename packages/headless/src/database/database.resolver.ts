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
import { StoreBranchDatabase as StoreBranchDatabaseMongo } from './mongodb/tmp-store-branch';
import { StoreAdminRoleDatabase as StoreAdminRoleDatabaseMongo } from './mongodb/store-admin-role';
import { SuperAdminRoleDatabase as SuperAdminRoleDatabaseMongo } from './mongodb/super-admin-role';
import { StoreAdminDatabase as StoreAdminDatabaseMongo } from './mongodb/store-admin';
import { PluginDatabase as PluginDatabaseMongo } from './mongodb/plugin';

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
  | 'STORE_BRANCH'
  | 'STORE_ADMIN'
  | 'SUPER_ADMIN'
  | 'STORE_ADMIN_ROLE'
  | 'SUPER_ADMIN_ROLE'
  | 'PLUGIN';


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
          case 'STORE_BRANCH':
            return StoreBranchDatabaseMongo;
          case 'STORE_ADMIN_ROLE':
            return StoreAdminRoleDatabaseMongo;
          case 'SUPER_ADMIN_ROLE':
            return SuperAdminRoleDatabaseMongo;
          case 'STORE_ADMIN':
            return StoreAdminDatabaseMongo;
          case 'PLUGIN':
            return PluginDatabaseMongo;

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