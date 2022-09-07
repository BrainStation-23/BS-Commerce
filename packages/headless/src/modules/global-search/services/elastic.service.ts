import { HttpStatus, Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { searchConfig } from "config/search";  
import { ProductSearchDatabase } from "src/database/mongodb/search";
import { Product } from "src/entity/product";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface"; 
import { ISearchProductResponse, ISuggestedProductResponse } from "../rest/dto";
import { ElasticHelperService } from "./elastic.helper";

@Injectable()
export class ElasticService {
  constructor(private readonly esService: ElasticsearchService, private readonly productSearchDB: ProductSearchDatabase, private readonly esHelperService: ElasticHelperService) {}

  async singleInsert(productId: string): Promise<number> { 
    try { 
      const index = 'products'  
      const productData = await this.productSearchDB.findProductById(productId)
      if(!productData){
        console.log('Product not found')
        return 0;
      }
      const body = await this.esHelperService.mapSearchData(productData) 
      const result = await this.esService.index({index,refresh: true, body}) 
      return result.statusCode;
    } catch (error) {
      console.log(error)
      return 0;
    } 
  }

async deleteSingleByElasticId(id: string): Promise<number> { 
    try { 
      const index = 'products'
      const type = 'products' 
      const result = await this.esService.delete({ index, type,  id }) 
      return result.statusCode;
    } catch (error) {
      console.log(error)
      return 0;
    } 
  }

  /**
   * global product search - public api 
   */
  async search(keyword: string, pageNumber=1, limit=20): Promise<IServiceResponse<ISearchProductResponse>>{
    const result = await this.esHelperService.getProductSearchData(keyword, pageNumber, limit )
    if(!result){
      return errorResponse("Error while searching", null, HttpStatus.CONFLICT)
    }
    return successResponse(null, result, HttpStatus.OK)
  }
  
  
  async searchSuggestion(keyword: string): Promise<IServiceResponse<ISuggestedProductResponse>>{
    const result = await this.esHelperService.getProductSearchSuggestion(keyword)
    if(!result){
      return errorResponse("Error while searching", null, HttpStatus.CONFLICT)
    }
    return successResponse(null, result, HttpStatus.OK)
  }
  
}