import { CreateManufacturerDto } from '../dto/createManufacturer.dto';
import { Injectable } from '@nestjs/common';
import { Manufacturer } from '../../../entity/manufacturer';

@Injectable()
export abstract class IManufacturerDatabase {
    abstract createManufacturer: (manufacturer: CreateManufacturerDto) => Promise<Manufacturer | null>;
    abstract getAllManufacturers: (skip?: number, limit?: number) => Promise<Manufacturer[] | null>;
    abstract findManufacturersCount: (searchQuery?: string) => Promise<Number | null>;
    abstract getManufacturer: (query: Record<string, string>) => Promise<Manufacturer | null>;
    abstract updateManufacturer: (manufacturerId: string, manufacturer: Manufacturer) => Promise<Manufacturer | null>;
    abstract deleteManufacturer: (manufacturerId: string) => Promise<Manufacturer | null>;
}