"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveGraphqlModule = void 0;
const auth_graphql_module_1 = require("../../modules/auth/auth.graphql.module");
const manufacturer_graphql_module_1 = require("../../modules/manufacturer/manufacturer.graphql.module");
const product_graphql_module_1 = require("../../modules/product/product.graphql.module");
const user_graphql_module_1 = require("../../modules/user/user.graphql.module");
const brand_graphql_module_1 = require("../../modules/brands/brand.graphql.module");
const graphql_init_1 = require("./graphql.init");
const category_graphql_module_1 = require("../../modules/category/category.graphql.module");
const auth_graphql_module_2 = require("../../modules/customer-auth/auth.graphql.module");
const cart_graphql_module_1 = require("../../modules/cart/cart.graphql.module");
const media_graphql_module_1 = require("../../modules/media/media.graphql.module");
const wishlist_graphql_module_1 = require("../../modules/wishlist/wishlist.graphql.module");
const tags_graphql_module_1 = require("../../modules/tags/tags.graphql.module");
const customer_graphql_module_1 = require("../../modules/customer/customer.graphql.module");
const order_graphql_module_1 = require("../../modules/order/order.graphql.module");
const ResolveGraphqlModule = () => {
    return [
        ...(0, graphql_init_1.GraphqlInitModule)(),
        auth_graphql_module_1.AuthModule,
        brand_graphql_module_1.BrandModule,
        cart_graphql_module_1.CartModule,
        user_graphql_module_1.UserModule,
        product_graphql_module_1.ProductModule,
        manufacturer_graphql_module_1.ManufacturerModule,
        category_graphql_module_1.CategoryModule,
        auth_graphql_module_2.CustomerAuthModule,
        media_graphql_module_1.MediaModule,
        wishlist_graphql_module_1.WishListModule,
        tags_graphql_module_1.TagsModule,
        customer_graphql_module_1.CustomerModule,
        order_graphql_module_1.OrderModule,
    ];
};
exports.ResolveGraphqlModule = ResolveGraphqlModule;
//# sourceMappingURL=graphql.module.resolver.js.map