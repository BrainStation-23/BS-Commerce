import { Brand } from './../../../entity/brand';
import { Brandservice } from './../services/index';
import { Helper } from 'src/helper/helper.interface';
import { Body, Controller, Get, Post, Put } from "@nestjs/common";

// app.route('/api/brands') Brand database schema (1 days)
// .get(brandController.getBrands) Get List of brands (2 days)
// .post(brandController.createBrand) Create brand (2 days)
// .put(brandController.updateBrand); Update brand (2 days)

@Controller('api/brands')

export class BrandController {

    constructor(
        private helper : Helper,
        private brandService: Brandservice
    ){}

    @Get('/')
    async getAllBrands(){
        const response = await this.brandService.getbrands();

        if (response) {
            return this.helper.apiResponse.successResponse(response);
        }
        else {
            return this.helper.apiResponse.errorResponse('CAN\'T_GET_ALL_BRANDs');
        }

    }

    @Post('/create')
    async addBrand(@Body() brand: Brand){
        const response = await this.brandService.createBrand(brand);

        if (response) {
            return this.helper.apiResponse.successResponse(response);
        }
        else {
            return this.helper.apiResponse.errorResponse('CAN\'T_CREATE_BRAND');
        }
    }

    @Put('/:id')
    async editBrand(){

    }

}