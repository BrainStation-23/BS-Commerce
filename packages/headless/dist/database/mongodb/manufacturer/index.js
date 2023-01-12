"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerDatabase = void 0;
const manufacturer_model_1 = require("./manufacturer.model");
const common_1 = require("@nestjs/common");
let ManufacturerDatabase = class ManufacturerDatabase {
    async createManufacturer(manufacturer) {
        return await manufacturer_model_1.ManufacturerModel.create(manufacturer);
    }
    async getAllManufacturers(skip, limit) {
        return await manufacturer_model_1.ManufacturerModel.find({})
            .select('-_id')
            .skip(skip)
            .limit(limit)
            .lean();
    }
    async findManufacturersCount(searchQuery) {
        return await manufacturer_model_1.ManufacturerModel.find({ searchQuery })
            .select('-_id')
            .count()
            .lean();
    }
    async getManufacturer(query) {
        return await manufacturer_model_1.ManufacturerModel.findOne(query).select('-_id').lean();
    }
    async updateManufacturer(manufacturerId, manufacturer) {
        return await manufacturer_model_1.ManufacturerModel.findOneAndUpdate({ id: manufacturerId }, { $set: manufacturer }, { new: true })
            .select('-_id')
            .lean()
            .exec();
    }
    async deleteManufacturer(manufacturerId) {
        return await manufacturer_model_1.ManufacturerModel.findOneAndRemove({
            id: manufacturerId,
        })
            .select('-_id')
            .lean();
    }
};
ManufacturerDatabase = __decorate([
    (0, common_1.Injectable)()
], ManufacturerDatabase);
exports.ManufacturerDatabase = ManufacturerDatabase;
//# sourceMappingURL=index.js.map