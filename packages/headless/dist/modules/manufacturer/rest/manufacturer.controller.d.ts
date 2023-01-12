import { UpdateManufacturerDto } from './dto/updateManufacturer.dto';
import { CreateManufacturerDto } from './dto/createManufacturer.dto';
import { ManufacturerService } from './../services/manufacturer.service';
import { Response } from 'express';
import { GetManufacturersQueryDto } from './dto/getManufacturers.dto';
export declare class ManufacturerController {
    private manufacturerService;
    constructor(manufacturerService: ManufacturerService);
    getAllManufacturers(query: GetManufacturersQueryDto, res: Response): Promise<{
        data: {
            manufacturers: import("@bs-commerce/models").Manufacturer[];
            total: number;
            message: import("@bs-commerce/models").GetManufacturersSuccessMessages;
        };
    } | {
        error: import("@bs-commerce/models").GetManufacturersErrorMessages;
        errors: import("@bs-commerce/models").DescriptiveError;
    }>;
    addManufacturer(manufacturer: CreateManufacturerDto, res: Response): Promise<{
        data: {
            manufacturer: import("@bs-commerce/models").Manufacturer;
            message: import("@bs-commerce/models").CreateManufacturerSuccessMessages;
        };
    } | {
        error: import("@bs-commerce/models").CreateManufacturerErrorMessages;
        errors: import("@bs-commerce/models").DescriptiveError;
    }>;
    getManufacturer(manufacturerId: string, res: Response): Promise<{
        data: {
            manufacturer: import("@bs-commerce/models").Manufacturer;
            message: import("@bs-commerce/models").GetManufacturerSuccessMessages;
        };
    } | {
        error: import("@bs-commerce/models").GetManufacturerErrorMessages;
        errors: import("@bs-commerce/models").DescriptiveError;
    }>;
    updateManufacturer(manufacturerId: string, manufacturer: UpdateManufacturerDto, res: Response): Promise<{
        data: {
            manufacturer: import("@bs-commerce/models").Manufacturer;
            message: import("@bs-commerce/models").UpdateManufacturerSuccessMessages;
        };
    } | {
        error: import("@bs-commerce/models").UpdateManufacturerErrorMessages;
        errors: import("@bs-commerce/models").DescriptiveError;
    }>;
    deleteManufacturer(manufacturerId: string, res: Response): Promise<{
        data: {
            manufacturer: import("@bs-commerce/models").Manufacturer;
            message: import("@bs-commerce/models").DeleteManufacturerSuccessMessages;
        };
    } | {
        error: import("@bs-commerce/models").DeleteManufacturerErrorMessages;
        errors: import("@bs-commerce/models").DescriptiveError;
    }>;
}
