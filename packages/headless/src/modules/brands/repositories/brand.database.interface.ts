import { UpdateBrandRequestdto, UpdateBrandResponseDto } from 'src/modules/brands/dto/updateBrandDto';
import { BrandDto } from 'src/modules/brands/dto/brandDto';
import { CreateBrandRequestDto } from 'src/modules/brands/dto/createBrandDto';
import { Injectable } from "@nestjs/common";
import { Brand } from "src/entity/brand";
import { GetAllBrandsDto } from 'src/modules/brands/dto/getAllBrandsDto';
import { CreateBrandRequest, GetAllBrands, UpdateBrandRequest } from 'models';

@Injectable()
export abstract class IBrandDatabase{
    abstract getBrandByName:(brandName: string) => Promise<Brand | null>;
    abstract getBrandById:(brandId: string) => Promise<Brand | null>;
    abstract addNewBrand:(brand: CreateBrandRequest) => Promise<Brand | null>;
    abstract getAllBrands:(skip?: number, limit?: number) => Promise<GetAllBrands | null>;
    abstract updateBrandById:(brandId: string, brand: UpdateBrandRequest) => Promise<Brand | null>;
    abstract deleteBrandById:(brandId: string) => Promise<Brand | null>;
    
}