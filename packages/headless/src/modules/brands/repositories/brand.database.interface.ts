import { BrandDto } from './../dto/brandDto';
import { CreateBrandRequestDto } from './../dto/createBrandDto';
import { Injectable } from "@nestjs/common";
import { Brand } from "src/entity/brand";
import { GetAllBrandsDto } from '../dto/getAllBrandsDto';

@Injectable()
export abstract class IBrandDatabase{
    abstract getBrandByName:(brandName: string) => Promise<Brand | null>;
    abstract getBrandById:(brandId: string) => Promise<Brand | null>;

    abstract addNewBrand:(brand: CreateBrandRequestDto) => Promise<BrandDto | null>;
    abstract getAllBrands:(skip?: number, limit?: number) => Promise<GetAllBrandsDto | null>;
    
    abstract updateBrandById:(brandId: string, brand: Brand) => Promise<Brand | null>;
    abstract deleteBrandById:(brandId: string) => Promise<Brand | null>;
    
}