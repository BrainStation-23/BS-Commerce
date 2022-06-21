import { Injectable } from '@nestjs/common';
import { Manufacturer } from 'src/entity/manufacturer';

@Injectable()
export abstract class IManufacturerDatabase {
    abstract createManufacturer: (manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract getAllManufacturers: (skip?: number, limit?: number) => Promise<Manufacturer[] | null>;
    abstract findManufacturersCount: (searchQuery?: string) => Promise<number | null>;
    abstract getManufacturer: (query: Record<string, string>) => Promise<Manufacturer | null>;
    abstract updateManufacturer: (manufacturerId: string, manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract deleteManufacturer: (manufacturerId: string) => Promise<Manufacturer | null>;
}