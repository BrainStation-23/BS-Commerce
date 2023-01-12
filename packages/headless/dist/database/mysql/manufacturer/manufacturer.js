"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerDatabase = void 0;
const common_1 = require("@nestjs/common");
const manufacturer_model_1 = require("./manufacturer.model");
let ManufacturerDatabase = class ManufacturerDatabase {
    async createManufacturer(manufacturer) {
        return await manufacturer_model_1.default.create(manufacturer);
    }
    async getAllManufacturers(skip, limit) {
        return await manufacturer_model_1.default.findAll({ where: {} });
    }
    async findManufacturersCount(searchQuery) {
        return await manufacturer_model_1.default.findAndCountAll({ where: {} });
    }
    async getManufacturer(query) {
        return await manufacturer_model_1.default.findOne({ where: query });
    }
    async updateManufacturer(manufacturerId, manufacturer) {
        return await manufacturer_model_1.default.update(manufacturer, {
            where: { id: manufacturerId },
        });
    }
    async deleteManufacturer(manufacturerId) {
        return await manufacturer_model_1.default.destroy({ where: { id: manufacturerId } });
    }
};
ManufacturerDatabase = __decorate([
    (0, common_1.Injectable)()
], ManufacturerDatabase);
exports.ManufacturerDatabase = ManufacturerDatabase;
//# sourceMappingURL=manufacturer.js.map