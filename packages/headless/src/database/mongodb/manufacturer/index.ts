import { IManufacturerDatabase } from './../../../modules/manufacturer/repositories/manufacturer.database.interface';
import { Manufacturer } from '../../../entity/manufacturer';
import { ManufacturerModel } from './manufacturer.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManufacturerDatabase implements IManufacturerDatabase {
    constructor() { }

    async createManufacturer(manufacturer: Manufacturer): Promise<Manufacturer | null> {
        return await ManufacturerModel.create(manufacturer);
    }

    async getAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[] | null> {
        return await ManufacturerModel.find({}).skip(skip).limit(limit).lean();
    }

    async findManufacturersCount(searchQuery?: string): Promise<Number | null> {
        return await ManufacturerModel.find({ searchQuery }).count().lean();
    }

    async getManufacturer(manufacturerId: string): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOne({ id: manufacturerId }).lean();
    }

    async updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOneAndUpdate(
            { id: manufacturerId },
            { $set: manufacturer },
            { new: true }
        )
            .lean()
            .exec();
    }

    async deleteManufacturer(manufacturerId: string): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOneAndRemove({ id: manufacturerId }).lean();
    }
}
