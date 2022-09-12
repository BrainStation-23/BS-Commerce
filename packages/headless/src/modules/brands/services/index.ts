
import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import * as crypto from 'crypto';
import { CreateBrandRequest, CreateBrandResponse, DeleteBrandResponse, ErrorMessage, ErrorMessageDeleteBrand, ErrorMessageGetBrandById, ErrorMessageUpdate, GetAllBrandsResponse, GetBrandByIdResponse, UpdateBrandRequest, UpdateBrandResponse } from "@bs-commerce/models";

import { Brand } from 'src/entity/brand';
import { BrandRepository } from './../repositories/index';
@Injectable()

export class BrandService{
    constructor( private brandRepo: BrandRepository ){}
    async createBrand( brand: CreateBrandRequest ): Promise<CreateBrandResponse>{
            const doesBrandExist = await this.brandRepo.getBrandByName(brand.info.name);
            if(doesBrandExist) return { error: ErrorMessage.BRAND_ALREADY_EXISTS, errors: null, code: HttpStatus.BAD_REQUEST};
            else {
                const newBrand = await this.brandRepo.createBrand(brand);
                if (!newBrand) return { error: ErrorMessage.CANNOT_CREATE_BRAND, errors: null, code: HttpStatus.INTERNAL_SERVER_ERROR };
                 
                return { code: HttpStatus.CREATED, data: newBrand }; 
            }    
    }
    
    async getAllBrands(skip?: number, limit?: number): Promise<GetAllBrandsResponse>{
        const allBrands = await this.brandRepo.getAllBrands(skip, limit);
        if(!allBrands) return { error: 'COULD NOT GET THE BRANDS DUE TO SERVER ERROR', errors: null, code: HttpStatus.INTERNAL_SERVER_ERROR };
    
        return { data: allBrands, code: HttpStatus.OK };
    } 

    async updateBrandById(brandId: string, brandFeatures: UpdateBrandRequest): Promise<UpdateBrandResponse>{
        const oldBrand = await this.brandRepo.getBrandById(brandId);
        if(!oldBrand) return {error: ErrorMessageUpdate.INVALID_BRAND_ID, errors: null, code: HttpStatus.BAD_REQUEST };

        for(let key in brandFeatures){
            if(oldBrand[key] && key !== 'id'){
                if(typeof brandFeatures[key] === 'object'){
                    for( let k in brandFeatures[key]){
                        if(oldBrand[key].hasOwnProperty(k) && k !== 'id'){
                            oldBrand[key][k] = brandFeatures[key][k];
                        }
                    }      
                }
            }else{
                return { error: ErrorMessageUpdate.INFO_OR_META_OBJECT_MISSING, errors: null, code: HttpStatus.BAD_REQUEST };
            }
        }

        const updatedBrand = await this.brandRepo.updateBrandById(brandId, oldBrand);
        if(!updatedBrand) return {error: ErrorMessageUpdate.CANNOT_UPDATE_BRAND, errors: null, code: HttpStatus.BAD_REQUEST};
        
        return { code: HttpStatus.OK, data: updatedBrand};
    }

    async getBrandById(brandId: string): Promise<GetBrandByIdResponse>{
        const foundBrand = await this.brandRepo.getBrandById(brandId);
        if(!foundBrand) return {error: ErrorMessageGetBrandById.INVALID_BRAND_ID, errors: null, code: HttpStatus.BAD_REQUEST };

        return { data: foundBrand, code: HttpStatus.OK };
    }

    async getBrandByName(name: string): Promise<GetBrandByIdResponse>{
        const foundBrand = await this.brandRepo.getBrandByName(name);
        if(!foundBrand) return {error: ErrorMessageGetBrandById.BRAND_NAME_NOT_FOUND, errors: null, code: HttpStatus.BAD_REQUEST };

        return { data: foundBrand, code: HttpStatus.OK };
    }

    async deleteBrandById(brandId: string): Promise<DeleteBrandResponse>{
        const deletedBrand = await this.brandRepo.deleteBrandById(brandId);
        if(!deletedBrand) return  {error: ErrorMessageDeleteBrand.INVALID_BRAND_ID, errors: null, code: HttpStatus.BAD_REQUEST };

        return {data: deletedBrand, code: HttpStatus.OK};
    }
}