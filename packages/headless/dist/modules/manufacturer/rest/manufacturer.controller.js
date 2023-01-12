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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerController = void 0;
const deleteManufacturer_dto_1 = require("./dto/deleteManufacturer.dto");
const updateManufacturer_dto_1 = require("./dto/updateManufacturer.dto");
const createManufacturer_dto_1 = require("./dto/createManufacturer.dto");
const createManufacturer_dto_2 = require("./dto/createManufacturer.dto");
const manufacturer_service_1 = require("./../services/manufacturer.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const getManufacturers_dto_1 = require("./dto/getManufacturers.dto");
const getManufacturer_dto_1 = require("./dto/getManufacturer.dto");
const auth_guard_1 = require("../../../guards/auth.guard");
let ManufacturerController = class ManufacturerController {
    constructor(manufacturerService) {
        this.manufacturerService = manufacturerService;
    }
    async getAllManufacturers(query, res) {
        const _a = await this.manufacturerService.getAllManufacturers(query), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async addManufacturer(manufacturer, res) {
        const _a = await this.manufacturerService.addManufacturer(manufacturer), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async getManufacturer(manufacturerId, res) {
        const _a = await this.manufacturerService.getManufacturer(manufacturerId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async updateManufacturer(manufacturerId, manufacturer, res) {
        const _a = await this.manufacturerService.updateManufacturer(manufacturerId, manufacturer), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
    async deleteManufacturer(manufacturerId, res) {
        const _a = await this.manufacturerService.deleteManufacturer(manufacturerId), { code } = _a, response = __rest(_a, ["code"]);
        res.status(code);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Manufacturers Success Response',
        type: getManufacturers_dto_1.GetManufacturersSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Manufacturers Error Response',
        type: getManufacturers_dto_1.GetManufacturersErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getManufacturers_dto_1.GetManufacturersQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "getAllManufacturers", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiResponse)({
        description: 'Create Manufacturer Success Response',
        type: createManufacturer_dto_1.CreateManufacturerSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Create Manufacturer Error Response',
        type: createManufacturer_dto_1.CreateManufacturerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createManufacturer_dto_2.CreateManufacturerDto, Object]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "addManufacturer", null);
__decorate([
    (0, common_1.Get)('/:manufacturerId'),
    (0, swagger_1.ApiResponse)({
        description: 'Get Manufacturer Success Response',
        type: getManufacturer_dto_1.GetManufacturerSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Get Manufacturer Error Response',
        type: getManufacturer_dto_1.GetManufacturerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "getManufacturer", null);
__decorate([
    (0, common_1.Patch)('/:manufacturerId'),
    (0, swagger_1.ApiResponse)({
        description: 'Update Manufacturer Success Response',
        type: updateManufacturer_dto_1.UpdateManufacturerSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Update Manufacturer Error Response',
        type: updateManufacturer_dto_1.UpdateManufacturerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateManufacturer_dto_1.UpdateManufacturerDto, Object]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "updateManufacturer", null);
__decorate([
    (0, common_1.Delete)('/:manufacturerId'),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Manufacturer Success Response',
        type: deleteManufacturer_dto_1.DeleteManufacturerSuccessResponseDto,
        status: common_1.HttpStatus.OK,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Delete Manufacturer Error Response',
        type: deleteManufacturer_dto_1.DeleteManufacturerErrorResponseDto,
        status: common_1.HttpStatus.BAD_REQUEST,
    }),
    __param(0, (0, common_1.Param)('manufacturerId')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "deleteManufacturer", null);
ManufacturerController = __decorate([
    (0, common_1.Controller)('manufacturers'),
    (0, swagger_1.ApiTags)('Manufacturer API'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(new auth_guard_1.RolesGuard(['admin'])),
    __metadata("design:paramtypes", [manufacturer_service_1.ManufacturerService])
], ManufacturerController);
exports.ManufacturerController = ManufacturerController;
//# sourceMappingURL=manufacturer.controller.js.map