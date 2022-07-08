import { UpdateBrandRequestdto, UpdateBrandResponseDto } from 'src/modules/brands/dto/updateBrandDto';
import { BrandDto } from 'src/modules/brands/dto/brandDto';
import { CreateBrandRequestDto } from 'src/modules/brands/dto/createBrandDto';
import { Injectable } from "@nestjs/common";
import { Brand } from "src/entity/brand";
import { GetAllBrandsDto } from 'src/modules/brands/dto/getAllBrandsDto';

@Injectable()
export abstract class IBrandDatabase{
    abstract getBrandByName:(brandName: string) => Promise<Brand | null>;

    abstract getBrandById:(brandId: string) => Promise<BrandDto | null>;
    abstract addNewBrand:(brand: CreateBrandRequestDto) => Promise<BrandDto | null>;
    abstract getAllBrands:(skip?: number, limit?: number) => Promise<GetAllBrandsDto | null>;
    abstract updateBrandById:(brandId: string, brand: UpdateBrandRequestdto) => Promise<BrandDto | null>;
    abstract deleteBrandById:(brandId: string) => Promise<BrandDto | null>;
    
}