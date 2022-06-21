import { CreateManufacturerDto } from 'src/modules/manufacturer/dto/createManufacturer.dto';
import { IManufacturerDatabase } from 'src/modules/manufacturer/repositories/manufacturer.database.interface';
import { Manufacturer } from 'src/entity/manufacturer';
import { ManufacturerModel } from './manufacturer.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManufacturerDatabase implements IManufacturerDatabase {
    
    /**
     * The createManufacturer function calls the create() method through ManufacturerModel
     * * The name property sets as unique within id
     * @param manufacturer 
     * @returns {Promise<Object>} manufacturer | null
     */
    async createManufacturer(manufacturer: CreateManufacturerDto): Promise<Manufacturer | null> {
        return await ManufacturerModel.create(manufacturer);
    }

    /**
     * The getAllManufacturers function calls find() method through ManufacturerModel
     * @param skip Optional
     * @param limit Optional
     * @returns {Promise<Array>} Array of manufacturers | null
     */
    async getAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[] | null> {
        return await ManufacturerModel.find({}).skip(skip).limit(limit).lean();
    }

    /**
     * The findManufacturersCount function calls find() and count() method through ManufacturerModel
     * to get the all manufacturers count in number
     * @param searchQuery Optional
     * @returns {Promise<Number>} number | null
     */
    async findManufacturersCount(searchQuery?: string): Promise<number | null> {
        return await ManufacturerModel.find({ searchQuery }).count().lean();
    }

    /**
     * The getManufacturer function calls findOne() method through ManufacturerModel
     * matching database with query as manufacturer ID or name or anything else 
     * @param manufacturerId 
     * @returns {Promise<Object>} manufacturer | null
     */
    async getManufacturer(query: Record<string, string>): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOne(query).lean();
    }

    /**
     * The updateManufacturer function calls findOneAndUpdate() method through ManufacturerModel
     * * It updates the manufacturer and creates newly replacing with the old one
     * @param manufacturerId 
     * @param manufacturer 
     * @returns {Promise<Object>} manufacturer | null
     */
    async updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOneAndUpdate(
            { id: manufacturerId },
            { $set: manufacturer },
            { new: true }
        )
            .lean()
            .exec();
    }

    /**
     * The deleteManufacturer function calls findOneAndRemove() method through ManufacturerModel
     * matching with id and removed the manufacturer from the database
     * @param manufacturerId 
     * @returns {Promise<Object>} manufacturer | null
     */
    async deleteManufacturer(manufacturerId: string): Promise<Manufacturer | null> {
        return await ManufacturerModel.findOneAndRemove({ id: manufacturerId }).lean();
    }
}
