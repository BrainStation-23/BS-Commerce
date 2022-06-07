import { CreateBrandRequestDto } from './../dto/createBrandDto';
import { Injectable } from "@nestjs/common";
import { Brand } from "src/entity/brand";

@Injectable()
export abstract class IBrandDatabase{
    abstract getBrandByName:(brandName: string) => Promise<Brand | null>;
    abstract getBrandById:(brandId: string) => Promise<Brand | null>;
    abstract addNewBrand:(brand: CreateBrandRequestDto) => Promise<Brand | null>;
    abstract getAllBrands:(skip?: number, limit?: number) => Promise<Brand[] | null>;
    abstract updateBrandById:(brandId: string, brand: Brand) => Promise<Brand | null>;
    abstract deleteBrandById:(brandId: string) => Promise<Brand | null>;
}