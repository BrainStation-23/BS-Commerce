import { Controller, Get, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { ElasticService } from "../services/elastic.service";

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
    
    @Get('insert-data')
    async insert(){ 
       const res = await this.elasticService.bulkInsert() 
        return res
    }

    
}