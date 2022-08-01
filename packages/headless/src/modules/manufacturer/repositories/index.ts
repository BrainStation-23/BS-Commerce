import { CreateManufacturerDto } from '../dto/createManufacturer.dto';
import { Injectable } from '@nestjs/common';
import { Manufacturer } from 'src/entity/manufacturer';
import { IManufacturerDatabase } from './manufacturer.database.interface';

@Injectable()
export class ManufacturerRepository {
    constructor(private readonly db: IManufacturerDatabase) { }

    async createManufacturer(manufacturer: Manufacturer): Promise<Manufacturer | null> {
        return await this.db.createManufacturer(manufacturer);
    }

    async getManufacturer(query: Record<string,string>): Promise<Manufacturer | null> {
        return await this.db.getManufacturer(query);
    }

    async getAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[]> {
        return await this.db.getAllManufacturers(skip, limit);
    }

    async getManufacturersCount(): Promise<Number | null> {
        return await this.db.findManufacturersCount();
    }

    async updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null> {
        return await this.db.updateManufacturer(manufacturerId, manufacturer);
    }

    async deleteManufacturer(manufacturerId: string): Promise<Manufacturer | null> {
        return await this.db.deleteManufacturer(manufacturerId);
    }
}