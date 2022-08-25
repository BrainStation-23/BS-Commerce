import { Body, Controller, Get, Post, Put, Query } from "@nestjs/common";
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Product } from "src/entity/product";
import { ElasticService } from "../services/elastic.service";
import { IProductSearchSchema } from "./schema";

@ApiTags('Global search')
@Controller('search')
export class SearchController{
    constructor(private readonly elasticService: ElasticService){}

    @ApiQuery({name:'q', description:"search query", example:"apple"})
    @Get()
    async search(@Query('q') q: string){ 
       const res = await this.elasticService.search(q) 
        return res
    }
 
    @Post('insert-single-data')
    async insertSingle(@Body('body') body: Product){ 
       const res = await this.elasticService.singleInsert(body) 
        return res
    }

    @ApiBody({type: IProductSearchSchema})
    @Put('delete-single-data')
    async updateSingle(@Query('id') id: string){ 
       const res = await this.elasticService.deleteSingleByElasticId(id) 
        return res
    }

    @Get('get-single-data')
    async getSingle(@Query('id') id: string){ 
       const res = await this.elasticService.getSingleByElasticId(id) 
        return res
    }
    
    @Get('insert-bulk-data')
    async insertBulk(){ 
       const res = await this.elasticService.bulkInsert() 
        return res
    }

    
}