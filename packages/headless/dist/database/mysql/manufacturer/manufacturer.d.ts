import { IManufacturerDatabase } from '../../../modules/manufacturer/repositories/manufacturer.database.interface';
import { Manufacturer } from '../../../entity/manufacturer';
export declare class ManufacturerDatabase implements IManufacturerDatabase {
    createManufacturer(manufacturer: Manufacturer): Promise<any | null>;
    getAllManufacturers(skip?: number, limit?: number): Promise<any[] | null>;
    findManufacturersCount(searchQuery?: string): Promise<any | null>;
    getManufacturer(query: Record<string, string>): Promise<any | null>;
    updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<any | null>;
    deleteManufacturer(manufacturerId: string): Promise<any | null>;
}
