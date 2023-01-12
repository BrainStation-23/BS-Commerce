import { Manufacturer } from '../../../entity/manufacturer';
import { IManufacturerDatabase } from './manufacturer.database.interface';
export declare class ManufacturerRepository {
    private readonly db;
    constructor(db: IManufacturerDatabase);
    createManufacturer(manufacturer: Manufacturer): Promise<Manufacturer | null>;
    getManufacturer(query: Record<string, string>): Promise<Manufacturer | null>;
    getAllManufacturers(skip?: number, limit?: number): Promise<Manufacturer[]>;
    getManufacturersCount(searchQuery?: string): Promise<number | null>;
    updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<Manufacturer | null>;
    deleteManufacturer(manufacturerId: string): Promise<Manufacturer | null>;
}
