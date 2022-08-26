import { HttpStatus, Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { searchConfig } from "config/search";
import { IProductSearchResponse } from "models";
import { ProductSrarchDatabase } from "src/database/mongodb/search";
import { Product } from "src/entity/product";
import { errorResponse, successResponse } from "src/utils/response";
import { IServiceResponse } from "src/utils/response/service.response.interface";
import { productSearchSchema } from "../rest/schema";

@Injectable()
export class ElasticService {
  constructor(private readonly esService: ElasticsearchService, private readonly productSearchDB: ProductSrarchDatabase) {}


  public async createIndex() {
    try {
      const index = searchConfig.index
      await this.esService.indices.delete({ index });
      await this.esService.indices.create({ index });
    } catch (error) {
      console.log(error)
    }
    
  }

  private async createSchema(){
    await this.esService.indices.putMapping({ 
      index: searchConfig.index, 
      type: searchConfig.index,
      include_type_name: true,
      body: { 
          properties: productSearchSchema
      }
  });
  }
  
  private mapSearchData(e: Product): Record<string, any> { 
      let data: any = {} 

      data.infoProductId = e.id || ''
      data.infoName = e?.info?.name || ''
      data.infoShortDescription = e?.info?.shortDescription || ''
      data.infoFullDescription = e?.info?.fullDescription || ''
      data.infoSku = e?.info?.sku || ''
      data.infoPrice = e?.info?.price || 0

      data.metaKeywords = e?.meta?.keywords || []
      data.metaTitle = e?.meta?.title || ''
      data.metaDescription = e?.meta?.description || ''

      data.brands = e?.brands || []
      data.categories = e?.categories || []
      data.manufacturer = e?.manufacturer  || {}
      data.photos = e?.photos.map(p => p.url)  || []
      data.tags = e?.tags || []

      return data;
  } 

  async getSingleByElasticId(id: string): Promise<any>{
    const {body} =  await this.esService.get({index: searchConfig.index, id})
    return body._source
  }

  async singleInsert(productData: Product): Promise<number> { 
    try { 
      const index = searchConfig.index 
      // if not exist
      const body = this.mapSearchData(productData) 
      const result = await this.esService.index({index,refresh: true, body}) 
      return result.statusCode;
    } catch (error) {
      console.log(error)
      return 0;
    } 
  }

async deleteSingleByElasticId(id: string): Promise<number> { 
    try { 
      const index = searchConfig.index
      const type = searchConfig.index 
      const result = await this.esService.delete({ index, type,  id }) 
      return result.statusCode;
    } catch (error) {
      console.log(error)
      return 0;
    } 
  }

  async bulkInsert(){
      try {
      await this.createIndex();
      await this.createSchema();

      const allProduct =  await this.productSearchDB.findAllProducts()
      if(!allProduct || allProduct.length < 1){
          return 0;
      }
      const esAction = {
        index: {
          _index: searchConfig.index,
          _type: searchConfig.index
        }
      } 
      let docs = []  
      const mapped = allProduct.map(e =>{ 
          const data = this.mapSearchData(e)  
          docs.push(esAction); 
          docs.push(data); 
      })   
      const result = await this.esService.bulk({ body: docs }) 
      await this.esService.indices.refresh({index: searchConfig.index})
      return result.statusCode; 
      } catch (error) {
      console.log(error)
      }
  }


  async search(keyword: string): Promise<IServiceResponse<IProductSearchResponse>>{
    const result = await this.getSearchData(keyword)
    if(!result){
      return errorResponse("Error while searching", null, HttpStatus.CONFLICT)
    }
    return successResponse(null, result, HttpStatus.OK)
  }
 
  private async getSearchData(searchKey): Promise<IProductSearchResponse> { 
    const query = {
      from: 0,
      size: 4,
      query: {
        bool:{
          should:{
            multi_match:{
              query: searchKey,
              type: "phrase_prefix",
              fields: ['info.name', 'info.shortDescription', 'info.fullDescription', 'tags', 'sku', 'meta.title', 'brands', 'categories.name', 'manufacturer.name'],
            }
          }
        }
      }
    }
  
    let startTime = Date.now()
    const { body: { hits } } = await this.esService.search({
      from:  searchKey.page  || 0,
      size:  searchKey.limit || 250,
      index: searchConfig.index, 
      type:  searchConfig.index,
      body:  query
    });  
    console.log("search time = ", Date.now()-startTime)
    
    startTime = Date.now()
    const resultsCount = hits.total.value as number; 
    const tags = hits.hits.flatMap(hit => hit._source.tags)
    const set = [...new Set(tags)].slice(0,5)
    const suggestion = hits.hits.map(hit => hit._source.info.name).slice(0,5).concat(set)
    const values  = hits.hits.map((hit) => {
      return {
        id:     hit._id,
        data:  hit._source,
        score:  hit._score
      }
    });

    console.log("search result formation time = ", Date.now()-startTime)
  
    return {
      resultsCount,
      values,
      suggestion
    }
  }

}