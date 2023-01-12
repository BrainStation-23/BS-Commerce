import { Response } from 'express';
import { IServiceResponse } from '../../../utils/response/service.response.interface';
import { ElasticService } from '../services/elastic.service';
import { ISearchProductResponse, ISuggestedProductResponse } from './dto';
export declare class SearchController {
    private readonly elasticService;
    constructor(elasticService: ElasticService);
    search(q: string, pageNumber: number, limit: number, res: Response): Promise<IServiceResponse<ISearchProductResponse>>;
    searchSuggestion(q: string, res: Response): Promise<IServiceResponse<ISuggestedProductResponse>>;
}
