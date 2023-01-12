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
exports.ManufacturerRepository = void 0;
const common_1 = require("@nestjs/common");
const manufacturer_database_interface_1 = require("./manufacturer.database.interface");
let ManufacturerRepository = class ManufacturerRepository {
    constructor(db) {
        this.db = db;
    }
    async createManufacturer(manufacturer) {
        return await this.db.createManufacturer(manufacturer);
    }
    async getManufacturer(query) {
        return await this.db.getManufacturer(query);
    }
    async getAllManufacturers(skip, limit) {
        return await this.db.getAllManufacturers(skip, limit);
    }
    async getManufacturersCount(searchQuery) {
        return await this.db.findManufacturersCount(searchQuery);
    }
    async updateManufacturer(manufacturerId, manufacturer) {
        return await this.db.updateManufacturer(manufacturerId, manufacturer);
    }
    async deleteManufacturer(manufacturerId) {
        return await this.db.deleteManufacturer(manufacturerId);
    }
};
ManufacturerRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [manufacturer_database_interface_1.IManufacturerDatabase])
], ManufacturerRepository);
exports.ManufacturerRepository = ManufacturerRepository;
//# sourceMappingURL=index.js.map