import { Brand } from './../../../entity/brand';
import { BrandRepository } from './../repositories/index';
import { Injectable } from "@nestjs/common";

@Injectable()

export class Brandservice{
    constructor( private brandRepo: BrandRepository ){}

    async createBrand(brand: Brand) {
        const doesBrandExist = await this.brandRepo.findBrand(brand.info.id);

        if(doesBrandExist){
            return null;
        }
        else{
            const newBrand = await this.brandRepo.createBrand(brand);
            return newBrand;
        }

    }

    async getbrands(){

    } 
    async updateBrand(){

    }

    
}