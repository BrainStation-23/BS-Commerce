"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveRestModule = void 0;
const auth_rest_module_1 = require("../../modules/auth/auth.rest.module");
const cart_rest_module_1 = require("../../modules/cart/cart.rest.module");
const category_rest_module_1 = require("../../modules/category/category.rest.module");
const compare_rest_module_1 = require("../../modules/compare/compare.rest.module");
const auth_rest_module_2 = require("../../modules/customer-auth/auth.rest.module");
const manufacturer_rest_module_1 = require("../../modules/manufacturer/manufacturer.rest.module");
const media_rest_module_1 = require("../../modules/media/media.rest.module");
const order_rest_module_1 = require("../../modules/order/order.rest.module");
const product_rest_module_1 = require("../../modules/product/product.rest.module");
const tags_rest_module_1 = require("../../modules/tags/tags.rest.module");
const user_rest_module_1 = require("../../modules/user/user.rest.module");
const brand_rest_module_1 = require("../../modules/brands/brand.rest.module");
const wishlist_rest_module_1 = require("../../modules/wishlist/wishlist.rest.module");
const customer_rest_module_1 = require("../../modules/customer/customer.rest.module");
const search_module_1 = require("../../modules/global-search/search.module");
const ResolveRestModule = () => {
    return [
        auth_rest_module_1.AuthModule,
        user_rest_module_1.UserModule,
        brand_rest_module_1.BrandModule,
        compare_rest_module_1.CompareModule,
        product_rest_module_1.ProductModule,
        manufacturer_rest_module_1.ManufacturerModule,
        category_rest_module_1.CategoryModule,
        auth_rest_module_2.CustomerAuthModule,
        cart_rest_module_1.CartModule,
        media_rest_module_1.MediaModule,
        compare_rest_module_1.CompareModule,
        wishlist_rest_module_1.WishListModule,
        order_rest_module_1.OrderModule,
        tags_rest_module_1.TagsModule,
        customer_rest_module_1.CustomerModule,
        search_module_1.SearchModule,
    ];
};
exports.ResolveRestModule = ResolveRestModule;
//# sourceMappingURL=rest.module.resolver.js.map