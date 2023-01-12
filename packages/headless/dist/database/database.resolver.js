"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveDatabaseDependency = void 0;
const brand_1 = require("./mongodb/brand");
const brand_2 = require("./mysql/brand");
const database_1 = require("../config/database");
const cart_1 = require("./mongodb/cart");
const category_1 = require("./mongodb/category");
const index_1 = require("./mongodb/compare/index");
const customer_1 = require("./mongodb/customer");
const manufacturer_1 = require("./mongodb/manufacturer");
const order_1 = require("./mongodb/order");
const product_1 = require("./mongodb/product");
const user_1 = require("./mongodb/user");
const manufacturer_2 = require("./mysql/manufacturer/manufacturer");
const user_2 = require("./mysql/user/user");
const wishList_1 = require("./mongodb/wishList");
const tags_1 = require("./mongodb/tags");
const db = database_1.dbConfig.db;
function ResolveDatabaseDependency(className) {
    try {
        switch (db) {
            case 'MONGO':
                switch (className) {
                    case 'USER':
                        return user_1.UserDatabase;
                    case 'BRAND':
                        return brand_1.BrandDatabase;
                    case 'COMPARE':
                        return index_1.CompareDatabase;
                    case 'PRODUCT':
                        return product_1.ProductDatabase;
                    case 'MANUFACTURER':
                        return manufacturer_1.ManufacturerDatabase;
                    case 'CATEGORY':
                        return category_1.CategoryDatabase;
                    case 'CUSTOMER_AUTH':
                        return customer_1.CustomerDatabase;
                    case 'CUSTOMER':
                        return customer_1.CustomerDatabase;
                    case 'CART':
                        return cart_1.CartDatabase;
                    case 'WISHLIST':
                        return wishList_1.WishListDatabase;
                    case 'ORDER':
                        return order_1.OrderDatabase;
                    case 'TAGS':
                        return tags_1.TagsDatabase;
                    default:
                        break;
                }
            case 'MYSQL':
                switch (className) {
                    case 'USER':
                        return user_2.UserDatabase;
                    case 'BRAND':
                        return brand_2.BrandDatabase;
                    case 'MANUFACTURER':
                        return manufacturer_2.ManufacturerDatabase;
                    default:
                        break;
                }
            default:
                throw new Error('No dependency implementation found');
        }
    }
    catch (err) {
        console.error('Error resolving database dependency');
    }
}
exports.ResolveDatabaseDependency = ResolveDatabaseDependency;
//# sourceMappingURL=database.resolver.js.map