import { IManufacturerDatabase } from '../../../modules/manufacturer/repositories/manufacturer.database.interface';
import { Manufacturer } from '../../../entity/manufacturer';
export declare class ManufacturerDatabase implements IManufacturerDatabase {
    createManufacturer(manufacturer: Manufacturer): Promise<Manufacturer | null>;
    getAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[] | null>;
    findManufacturersCount(searchQuery?: string): Promise<number | null>;
    getManufacturer(query: Record<string, string>): Promise<Manufacturer | null>;
    updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null>;
    deleteManufacturer(manufacturerId: string): Promise<Manufacturer | null>;
}
