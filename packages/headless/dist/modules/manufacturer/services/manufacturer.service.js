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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerService = void 0;
const common_1 = require("@nestjs/common");
const helper_interface_1 = require("../../../helper/helper.interface");
const repositories_1 = require("../repositories");
let ManufacturerService = class ManufacturerService {
    constructor(manufacturerRepo, helper) {
        this.manufacturerRepo = manufacturerRepo;
        this.helper = helper;
    }
    async addManufacturer(manufacturer) {
        const isManufacturerExist = await this.manufacturerRepo.getManufacturer({
            name: manufacturer.name,
        });
        if (isManufacturerExist) {
            return this.helper.serviceResponse.errorResponse("MANUFACTURER_ALREADY_EXISTS", null, common_1.HttpStatus.BAD_REQUEST);
        }
        const newManufacturer = await this.manufacturerRepo.createManufacturer(manufacturer);
        if (!newManufacturer) {
            return this.helper.serviceResponse.errorResponse("MANUFACTURER_NOT_CREATED_SUCCESSFULLY", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse({
            manufacturer: newManufacturer,
            message: "MANUFACTURER_CREATED_SUCCESSFULLY",
        }, common_1.HttpStatus.OK);
    }
    async getAllManufacturers(query) {
        const { skip, limit } = query;
        const foundManufacturers = await this.manufacturerRepo.getAllManufacturers(skip, limit);
        if (!foundManufacturers) {
            return this.helper.serviceResponse.errorResponse("MANUFACTURERS_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        }
        let allManufacturersResponse = {
            manufacturers: [],
            total: 0,
            message: "MANUFACTURER_IS_EMPTY",
        };
        if (foundManufacturers.length === 0) {
            return this.helper.serviceResponse.successResponse(allManufacturersResponse, common_1.HttpStatus.OK);
        }
        else {
            allManufacturersResponse = {
                manufacturers: foundManufacturers,
                total: foundManufacturers.length,
                message: "MANUFACTURERS_LOADED_SUCCESSFULLY",
            };
            return this.helper.serviceResponse.successResponse(allManufacturersResponse, common_1.HttpStatus.OK);
        }
    }
    async getManufacturer(manufacturerId) {
        const foundManufacturer = await this.manufacturerRepo.getManufacturer({
            id: manufacturerId,
        });
        if (!foundManufacturer) {
            return this.helper.serviceResponse.errorResponse("MANUFACTURER_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.helper.serviceResponse.successResponse({
            manufacturer: foundManufacturer,
            message: "MANUFACTURER_LOADED_SUCCESSFULLY",
        }, common_1.HttpStatus.OK);
    }
    async updateManufacturer(manufacturerId, manufacturer) {
        const foundManufacturer = await this.manufacturerRepo.getManufacturer({
            id: manufacturerId,
        });
        const isManufacturerExist = await this.manufacturerRepo.getManufacturer({
            name: manufacturer.name,
        });
        if (!foundManufacturer) {
            return this.helper.serviceResponse.errorResponse("MANUFACTURER_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        }
        else if (isManufacturerExist) {
            return this.helper.serviceResponse.errorResponse("THE_SAME_NAME_MANUFACTURER_ALREADY_EXISTS", null, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            const savedManufacturer = await this.manufacturerRepo.updateManufacturer(manufacturerId, manufacturer);
            if (!savedManufacturer) {
                return this.helper.serviceResponse.errorResponse("MANUFACTURER_NOT_UPDATED", null, common_1.HttpStatus.BAD_REQUEST);
            }
            return this.helper.serviceResponse.successResponse({
                manufacturer: savedManufacturer,
                message: "MANUFACTURER_UPDATED_SUCCESSFULLY",
            }, common_1.HttpStatus.OK);
        }
    }
    async deleteManufacturer(manufacturerId) {
        const foundManufacturer = await this.manufacturerRepo.getManufacturer({
            id: manufacturerId,
        });
        if (!foundManufacturer) {
            return this.helper.serviceResponse.errorResponse("MANUFACTURER_NOT_FOUND", null, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            const manufacturer = await this.manufacturerRepo.deleteManufacturer(manufacturerId);
            if (!manufacturer) {
                return this.helper.serviceResponse.errorResponse("MANUFACTURER_NOT_DELETED", null, common_1.HttpStatus.BAD_REQUEST);
            }
            return this.helper.serviceResponse.successResponse({
                manufacturer,
                message: "MANUFACTURER_DELETED_SUCCESSFULLY",
            }, common_1.HttpStatus.OK);
        }
    }
};
ManufacturerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.ManufacturerRepository,
        helper_interface_1.Helper])
], ManufacturerService);
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturer.service.js.map