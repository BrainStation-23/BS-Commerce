import { Controller, Get, Query, Res } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { ElasticService } from "../services/elastic.service";

@ApiTags('Global search')
@Controller('search')
export class SearchController{
    constructor(private readonly elasticService: ElasticService){}

    @ApiQuery({name:'q', description:"search query", example:"apple"})
    @Get()
    async search(@Query('q') q: string, @Res({ passthrough: true }) res: Response){ 
        const { code, ...response } = await this.elasticService.search(q) 
        res.status(code);
        return { code, ...response };
    }
 
    // @Post('insert-single-data')
    // async insertSingle(@Body('body') body: Product){ 
    //    const res = await this.elasticService.singleInsert(body) 
    //     return res
    // }

    // @ApiBody({type: IProductSearchSchema})
    // @Put('delete-single-data')
    // async updateSingle(@Query('id') id: string){ 
    //    const res = await this.elasticService.deleteSingleByElasticId(id) 
    //     return res
    // }

    // @Get('get-single-data')
    // async getSingle(@Query('id') id: string){ 
    //    const res = await this.elasticService.getSingleByElasticId(id) 
    //     return res
    // }
    
    // @Get('insert-bulk-data')
    // async insertBulk(){ 
    //    const res = await this.elasticService.bulkInsert() 
    //     return res
    // } 
}