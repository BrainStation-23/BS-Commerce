"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerResolver = void 0;
const manufacturer_service_1 = require("./../services/manufacturer.service");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../../guards/auth.guard");
const manufacturer_model_1 = require("./manufacturer.model");
const helper_interface_1 = require("../../../helper/helper.interface");
let ManufacturerResolver = class ManufacturerResolver {
    constructor(manufacturerService, helper) {
        this.manufacturerService = manufacturerService;
        this.helper = helper;
    }
    async getAllManufacturers(query) {
        const res = await this.manufacturerService.getAllManufacturers(query);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async getManufacturer(manufacturerId) {
        const res = await this.manufacturerService.getManufacturer(manufacturerId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async addManufacturer(manufacturer) {
        const res = await this.manufacturerService.addManufacturer(manufacturer);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async updateManufacturer(manufacturerId, manufacturer) {
        const res = await this.manufacturerService.updateManufacturer(manufacturerId, manufacturer);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
    async deleteManufacturer(manufacturerId) {
        const res = await this.manufacturerService.deleteManufacturer(manufacturerId);
        return this.helper.serviceResponse.graphqlResponse(res);
    }
};
__decorate([
    (0, graphql_1.Query)(() => manufacturer_model_1.AllManufacturersResponse, {
        name: 'getAllManufacturers',
        description: 'Get all manufacturers passing with optional query as skip and limit',
    }),
    __param(0, (0, graphql_1.Args)('query', {
        type: () => manufacturer_model_1.ManufacturersQuery,
        nullable: true,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_model_1.ManufacturersQuery]),
    __metadata("design:returntype", Promise)
], ManufacturerResolver.prototype, "getAllManufacturers", null);
__decorate([
    (0, graphql_1.Query)(() => manufacturer_model_1.ManufacturerResponse, {
        name: 'getManufacturer',
        description: 'Get single manufacturer by id',
    }),
    __param(0, (0, graphql_1.Args)('manufacturerId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufacturerResolver.prototype, "getManufacturer", null);
__decorate([
    (0, graphql_1.Mutation)(() => manufacturer_model_1.ManufacturerResponse, {
        name: 'addManufacturer',
        description: 'Create a new manufacturer within the ManufacturerInput',
    }),
    __param(0, (0, graphql_1.Args)({ name: 'manufacturer', type: () => manufacturer_model_1.ManufacturerInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_model_1.ManufacturerInput]),
    __metadata("design:returntype", Promise)
], ManufacturerResolver.prototype, "addManufacturer", null);
__decorate([
    (0, graphql_1.Mutation)(() => manufacturer_model_1.ManufacturerResponse, {
        name: 'updateManufacturer',
        description: 'Update a manufacturer by its id',
    }),
    __param(0, (0, graphql_1.Args)({ name: 'manufacturerId', type: () => String })),
    __param(1, (0, graphql_1.Args)({ name: 'manufacturer', type: () => manufacturer_model_1.ManufacturerInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, manufacturer_model_1.ManufacturerInput]),
    __metadata("design:returntype", Promise)
], ManufacturerResolver.prototype, "updateManufacturer", null);
__decorate([
    (0, graphql_1.Mutation)(() => manufacturer_model_1.ManufacturerResponse, {
        name: 'deleteManufacturer',
        description: 'Delete a manufacturer by its id',
    }),
    __param(0, (0, graphql_1.Args)({ name: 'manufacturerId', type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufacturerResolver.prototype, "deleteManufacturer", null);
ManufacturerResolver = __decorate([
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    (0, graphql_1.Resolver)(() => manufacturer_model_1.ManufacturerSchemaGql),
    __metadata("design:paramtypes", [manufacturer_service_1.ManufacturerService,
        helper_interface_1.Helper])
], ManufacturerResolver);
exports.ManufacturerResolver = ManufacturerResolver;
//# sourceMappingURL=manufacturer.resolver.js.map