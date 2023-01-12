"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const database_resolver_1 = require("../../database/database.resolver");
const repositories_1 = require("./repositories");
const order_db_interface_1 = require("./repositories/order.db.interface");
const admin_controlller_1 = require("./rest/admin.controlller");
const customer_controller_1 = require("./rest/customer.controller");
const admin_service_1 = require("./services/admin.service");
const customer_service_1 = require("./services/customer.service");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        controllers: [customer_controller_1.OrderCustomerController, admin_controlller_1.OrderAdminController],
        providers: [
            customer_service_1.OrderCustomerService,
            admin_service_1.OrderAdminService,
            repositories_1.OrderRepository,
            {
                provide: order_db_interface_1.IOrderDatabase,
                useClass: (0, database_resolver_1.ResolveDatabaseDependency)('ORDER'),
            },
        ],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.rest.module.js.map