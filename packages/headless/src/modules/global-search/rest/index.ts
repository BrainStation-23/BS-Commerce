import { Controller, Get, ParseIntPipe, Query, Res } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { IProductSearchResponse } from "models";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { ElasticService } from "../services/elastic.service";
import { ISearchProductResponse, ISuggestedProductResponse } from "./dto";

@ApiTags('Global search')
@Controller('search')
export class SearchController{
    constructor(private readonly elasticService: ElasticService){}

    @ApiQuery({name:'q', description:"search query", example:"apple"})
    @ApiQuery({name:'pageNumber', required: false, example:"1"})
    @ApiQuery({name:'limit', required:false, example:"10"})
    @Get()
    async search(@Query('q') q: string, @Query('pageNumber') pageNumber:number, @Query('limit') limit:number, @Res({ passthrough: true }) res: Response): Promise<IServiceResponse<ISearchProductResponse>>{
        const { code, ...response } = await this.elasticService.search(q, pageNumber, limit) 
        res.status(code);
        return { code, ...response };
    }

    @ApiQuery({name:'q', description:"search suggestion", example:"apple"})
    @Get('suggestion')
    async searchSuggestion(@Query('q') q: string, @Res({ passthrough: true }) res: Response): Promise<IServiceResponse<ISuggestedProductResponse>>{
        const { code, ...response } = await this.elasticService.searchSuggestion(q) 
        res.status(code);
        return { code, ...response };
    }
}