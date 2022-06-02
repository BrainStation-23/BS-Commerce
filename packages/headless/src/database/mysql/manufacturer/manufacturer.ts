import { IManufacturerDatabase } from './../../../modules/manufacturer/repositories/manufacturer.database.interface';
import { Manufacturer } from '../../../entity/manufacturer';
// import { ManufacturerModel } from './manufacturer.model';
import { Injectable } from '@nestjs/common';
import ManufacturerModel from './manufacturer.model';

@Injectable()
export class ManufacturerDatabase implements IManufacturerDatabase {
    constructor() { }

    /**
     * The createManufacturer function calls the create() method through ManufacturerModel
     * * The name property sets as unique within id
     * @param manufacturer 
     * @returns {Promise<Object>} manufacturer | null
     */
    async createManufacturer(manufacturer: Manufacturer): Promise<any | null> {
        return await ManufacturerModel.create(manufacturer);
    }

    /**
     * The getAllManufacturers function calls find() method through ManufacturerModel
     * @param skip Optional
     * @param limit Optional
     * @returns {Promise<Array>} Array of manufacturers | null
     */
    async getAllManufacturers(skip?: number, limit?: number): Promise<any[] | null> {
        return await ManufacturerModel.findAll({where: {}});
    }

    /**
     * The findManufacturersCount function calls find() and count() method through ManufacturerModel
     * to get the all manufacturers count in number
     * @param searchQuery Optional
     * @returns {Promise<Number>} number | null
     */
    async findManufacturersCount(searchQuery?: string): Promise<any | null> {
        return await ManufacturerModel.findAndCountAll({ where: {} });
    }

    /**
     * The getManufacturer function calls findOne() method through ManufacturerModel
     * matching database with query as manufacturer ID or name or anything else 
     * @param manufacturerId 
     * @returns {Promise<Object>} manufacturer | null
     */
    async getManufacturer(query: Record<string, string>): Promise<any | null> {
        return await ManufacturerModel.findOne({where: query});
    }

    /**
     * The updateManufacturer function calls findOneAndUpdate() method through ManufacturerModel
     * * It updates the manufacturer and creates newly replacing with the old one
     * @param manufacturerId 
     * @param manufacturer 
     * @returns {Promise<Object>} manufacturer | null
     */
    async updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<any | null> {
        return await ManufacturerModel.update(manufacturer, {where: {id: manufacturerId}}
        );
    }

    /**
     * The deleteManufacturer function calls findOneAndRemove() method through ManufacturerModel
     * matching with id and removed the manufacturer from the database
     * @param manufacturerId 
     * @returns {Promise<Object>} manufacturer | null
     */
    async deleteManufacturer(manufacturerId: string): Promise<any | null> {
        return await ManufacturerModel.destroy({where: { id: manufacturerId }});
    }
}
