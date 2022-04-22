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

    async findAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[] | null> {
        return await ManufacturerModel.find({}).skip(skip).limit(limit).lean();
    }

    async findManufacturersNumber(searchQuery?: string): Promise<Number | null> {
        return await ManufacturerModel.find({ searchQuery }).count().lean();
    }

    async findManufacturerById(manufacturerId: string): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOne({ id: manufacturerId }).lean();
    }

    async updateManufacturerById(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOneAndUpdate(
            { id: manufacturerId },
            { $set: manufacturer },
            { new: true }
        )
            .lean()
            .exec();
    }

    async deleteManufacturerById(manufacturerId: string): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOneAndRemove({ id: manufacturerId }).lean();
    }
}
