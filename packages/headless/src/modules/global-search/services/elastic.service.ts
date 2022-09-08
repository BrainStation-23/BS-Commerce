import { HttpStatus, Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { searchConfig } from 'config/search';
import { Cipher } from 'crypto';
import { ProductSearchDatabase } from 'src/database/mongodb/search';
import { Product } from 'src/entity/product';
import { errorResponse, successResponse } from 'src/utils/response';
import { IServiceResponse } from 'src/utils/response/service.response.interface';
import { ISearchProductResponse, ISuggestedProductResponse } from '../rest/dto';
import { ElasticHelperService } from './elastic.helper';

@Injectable()
export class ElasticService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly productSearchDB: ProductSearchDatabase,
    private readonly esHelperService: ElasticHelperService,
  ) {}

  

  async upsertProductToElasticSearch(id: string): Promise<any> {
    const remove = await this.esHelperService.deleteFromElasticSearchByproductId(id); 
    const status = await this.esHelperService.singleProductInsertInElasticSearch(id);
    if(status === 201){
      return true
    }else{
      return false
    }
  }

  async bulkUpsertProductToElasticSearch(ids: string[]):Promise<any>{
    try {
      await Promise.all(ids.map(async e => await this.upsertProductToElasticSearch(e) ))
      return true
    } catch (error) {
      console.log(error)
      return false
    } 
  }

  /**
   * global product search - public api
   */
  async search(
    keyword: string,
    pageNumber = 1,
    limit = 20,
  ): Promise<IServiceResponse<ISearchProductResponse>> {
    const result = await this.esHelperService.getProductSearchData(
      keyword,
      pageNumber,
      limit,
    );
    if (!result) {
      return errorResponse('Error while searching', null, HttpStatus.CONFLICT);
    }
    return successResponse(null, result, HttpStatus.OK);
  }

  async searchSuggestion(
    keyword: string,
  ): Promise<IServiceResponse<ISuggestedProductResponse>> {
    const result = await this.esHelperService.getProductSearchSuggestion(
      keyword,
    );
    if (!result) {
      return errorResponse('Error while searching', null, HttpStatus.CONFLICT);
    }
    return successResponse(null, result, HttpStatus.OK);
  }
}
