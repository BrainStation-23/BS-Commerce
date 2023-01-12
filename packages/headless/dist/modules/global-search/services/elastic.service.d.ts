import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ProductSearchDatabase } from '../../../database/mongodb/search';
import { IServiceResponse } from '../../../utils/response/service.response.interface';
import { ISearchProductResponse, ISuggestedProductResponse } from '../rest/dto';
import { ElasticHelperService } from './elastic.helper';
export declare class ElasticService {
    private readonly esService;
    private readonly productSearchDB;
    private readonly esHelperService;
    constructor(esService: ElasticsearchService, productSearchDB: ProductSearchDatabase, esHelperService: ElasticHelperService);
    singleInsert(productId: string): Promise<number>;
    deleteSingleByElasticId(id: string): Promise<number>;
    search(keyword: string, pageNumber?: number, limit?: number): Promise<IServiceResponse<ISearchProductResponse>>;
    searchSuggestion(keyword: string): Promise<IServiceResponse<ISuggestedProductResponse>>;
}
