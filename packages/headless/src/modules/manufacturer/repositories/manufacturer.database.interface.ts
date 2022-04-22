import { Injectable } from '@nestjs/common';
import { Manufacturer } from '../../../entity/manufacturer';

@Injectable()
export abstract class IManufacturerDatabase {
    abstract createManufacturer: (manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract findAllManufacturers: (skip?: number, limit?: number) => Promise<Manufacturer[] | null>;
    abstract findManufacturersNumber: (searchQuery?: string) => Promise<Number | null>;
    abstract findManufacturerById: (manufacturerId: string) => Promise<Manufacturer | null>;
    abstract updateManufacturerById: (manufacturerId: string, manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract deleteManufacturerById: (manufacturerId: string) => Promise<Manufacturer | null>;
}