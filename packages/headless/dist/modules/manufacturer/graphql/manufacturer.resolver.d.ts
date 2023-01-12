import { ManufacturerService } from './../services/manufacturer.service';
import { ManufacturerInput, ManufacturersQuery } from './manufacturer.model';
import { Helper } from '../../../helper/helper.interface';
export declare class ManufacturerResolver {
    private manufacturerService;
    private helper;
    constructor(manufacturerService: ManufacturerService, helper: Helper);
    getAllManufacturers(query?: ManufacturersQuery): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    getManufacturer(manufacturerId: string): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    addManufacturer(manufacturer: ManufacturerInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    updateManufacturer(manufacturerId: string, manufacturer: ManufacturerInput): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    deleteManufacturer(manufacturerId: string): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
