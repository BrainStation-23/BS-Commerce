import { Manufacturer } from '../../../entity/manufacturer';
import { Injectable } from '@nestjs/common';
import { IManufacturerDatabase } from './manufacturer.database.interface';

@Injectable()
export class ManufacturerRepository {
    constructor(private readonly db: IManufacturerDatabase) { }

    async createManufacturer(manufacturer: Manufacturer): Promise<Manufacturer | null> {
        const savedManufacturer = await this.db.createManufacturer(manufacturer);
        return savedManufacturer;
    }

    async getManufacturerById(manufacturerId: string): Promise<Manufacturer | null> {
        const manufacturer = await this.db.findManufacturerById(manufacturerId);
        return manufacturer;
    }

    async getAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[]> {
        const manufacturers = await this.db.findAllManufacturers(skip, limit);
        return manufacturers;
    }

    async getManufacturersNumber(searchQuery?: string): Promise<Number | null> {
        const manufacturerNumber = await this.db.findManufacturersNumber(searchQuery);
        return manufacturerNumber;
    }

    async updateManufacturerById(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null> {
        const savedManufacturer = await this.db.updateManufacturerById(manufacturerId, manufacturer);
        return savedManufacturer;
    }

    async deleteManufacturerById(manufacturerId: string): Promise<Manufacturer | null> {
        const manufacturer = await this.db.deleteManufacturerById(manufacturerId);
        return manufacturer;
    }
}