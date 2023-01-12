"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const wishlist_resolver_1 = require("./graphql/wishlist.resolver");
const repositories_1 = require("./repositories");
const wishList_database_interface_1 = require("./repositories/wishList.database.interface");
const services_1 = require("./services");
let WishListModule = class WishListModule {
};
WishListModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            wishlist_resolver_1.WishListResolver,
            services_1.WishListService,
            repositories_1.WishListRepository,
            {
                provide: wishList_database_interface_1.IWishListDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('WISHLIST'),
            },
        ],
    })
], WishListModule);
exports.WishListModule = WishListModule;
//# sourceMappingURL=wishlist.graphql.module.js.map