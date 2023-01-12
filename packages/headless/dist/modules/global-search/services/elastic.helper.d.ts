import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ProductSearchDatabase } from '../../../database/mongodb/search';
import { Product } from '../../../entity/product';
import { ISearchProductResponse, ISuggestedProductResponse } from '../rest/dto';
export declare class ElasticHelperService {
    private readonly esService;
    private readonly productSearchDB;
    constructor(esService: ElasticsearchService, productSearchDB: ProductSearchDatabase);
    private createProductSchema;
    createProductIndex(): Promise<void>;
    mapSearchData(e: Product): Record<string, any>;
    getProductSearchData(searchKey: any, pageNumber?: number, limit?: number): Promise<ISearchProductResponse>;
    getProductSearchSuggestion(searchKey: any): Promise<ISuggestedProductResponse>;
}
