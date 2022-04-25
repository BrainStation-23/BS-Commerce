import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { Brand } from './../../../entity/brand';
import { Brandservice } from './../services/index';

@Controller('brands')

export class BrandController {

    constructor(
        private brandService: Brandservice
    ){}

    @Get('/')
    async getAllBrands(
        @Query('skip') skip: number, 
        @Query('limit') limit: number, 
        @Res({ passthrough: true }) res: Response){

        const {code, ...response} = await this.brandService.getAllBrands();
        res.status(code);
        return response ;
    }

    @Get('/:brandId')
    async getBrand(
        @Param('brandId') brandId: string, 
        @Res({ passthrough: true }) res: Response){

        const {code, ...response } = await this.brandService.getBrandById(brandId);
        
        res.status(code);
        return response;
    }

    @Post('/create')
    async createBrand(
        @Body() brand: Brand, 
        @Res({ passthrough: true }) res: Response){

        const { code, ...response } = await this.brandService.createBrand(brand);

        res.status(code);
        return response;
    }

    @Put('/:brandId')
    async updateBrand(
        @Param('brandId') brandId: string,
        @Body() featuresToUpdate: Brand,
        @Res({ passthrough: true })
        res: Response
        ){

        const { code, ...response }  = await this.brandService.updateBrandById(brandId, featuresToUpdate);
        
        res.status(code);
        return response;
    }

    @Delete('/:brandId')
    async deleteBrandById(
        @Param('brandId') brandId: string, 
        @Res({ passthrough: true }) res: Response){
            
        const { code, ...response } = await this.brandService.deleteBrandById(brandId);

        res.status(code);
        return response;  
    }

}