import { GetManufacturersResponse, UpdateManufacturerResponse, DeleteManufacturerResponse, GetManufacturerResponse, CreateManufacturerResponse } from '@bs-commerce/models';
import { Helper } from '../../../helper/helper.interface';
import { ManufacturerRepository } from '../repositories';
import { Manufacturer, ManufacturersQuery } from '../../../entity/manufacturer';
export declare class ManufacturerService {
    private manufacturerRepo;
    private helper;
    constructor(manufacturerRepo: ManufacturerRepository, helper: Helper);
    addManufacturer(manufacturer: Manufacturer): Promise<CreateManufacturerResponse>;
    getAllManufacturers(query: ManufacturersQuery): Promise<GetManufacturersResponse>;
    getManufacturer(manufacturerId: string): Promise<GetManufacturerResponse>;
    updateManufacturer(manufacturerId: string, manufacturer: Manufacturer): Promise<UpdateManufacturerResponse>;
    deleteManufacturer(manufacturerId: string): Promise<DeleteManufacturerResponse>;
}
