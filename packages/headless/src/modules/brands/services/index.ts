import { Brand } from './../../../entity/brand';
import { BrandRepository } from './../repositories/index';
import { Injectable } from "@nestjs/common";

@Injectable()

export class Brandservice{
    constructor( private brandRepo: BrandRepository ){}

    async createBrand(brand: Brand): Promise<Brand | null> {
        const doesBrandExist = await this.brandRepo.findBrand(brand.id);

        if(doesBrandExist){
            return null;
        }
        else{
            const newBrand = await this.brandRepo.createBrand(brand);
            return newBrand;
        }

    }

    async getbrands(): Promise<Brand[] | null>{
        const brands = await this.brandRepo.findAllBrand();

        if(brands){
            return null;
        }
        else{
            return brands;
        }

    } 

    async editBrand(brandId: string, brandFeatures: Brand): Promise<Brand | null>{
        
        const response = await this.brandRepo.updateBrand(brandId, brandFeatures);
        return response || null;
    }

    
}