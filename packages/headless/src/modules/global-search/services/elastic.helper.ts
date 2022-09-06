import { Injectable, ParseIntPipe } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { ProductSearchDatabase } from "src/database/mongodb/search";
import { Product } from "src/entity/product";
import { ISearchProductResponse, ISuggestedProductResponse } from "../rest/dto";
import { productSearchSchema } from "./product.schema";

@Injectable()
export class ElasticHelperService { 
  constructor(private readonly esService: ElasticsearchService, private readonly productSearchDB: ProductSearchDatabase) {}
 
    private async createProductSchema(){
        await this.esService.indices.putMapping({ 
            index: 'products', 
            type: 'products',
            include_type_name: true,
            body: { 
                properties: productSearchSchema
            }
        });
    }

    async createProductIndex() {
        try {
            const isExist = await this.esService.indices.exists({index: 'products'}); 
            if(isExist.statusCode !== 200){
                await this.esService.indices.create({ index: 'products' });
                await this.createProductSchema()
            }
        } catch (error) {
            console.log(error)
        } 
    } 

    async mapSearchData(e: Product): Promise<Record<string, any>> { 
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

    async getProductSearchData(searchKey, pageNumber=1, limit=20): Promise<ISearchProductResponse> {
      
        if(typeof pageNumber === 'string') pageNumber = parseInt(pageNumber)
        if(typeof limit === 'string') limit = parseInt(limit)
        
        limit = limit > 30 ? 30 : limit
        const query = {  
          query: {
            bool:{
              should:{
                multi_match:{
                  query: searchKey, 
                  fields: ['info.name', 'info.shortDescription', 'info.fullDescription', 'sku', 'meta.title', 'tags', 'brands','categories.name', 'manufacturer.name'],
                }
              }
            }
          }
        }
      
        console.log(limit)
        let startTime = Date.now()
        const { body: { hits } } = await this.esService.search({
          from:  (pageNumber-1)*limit  || 0,
          size:  limit,
          index: 'products', 
          type:  'products',
          body:  query
        });  
        console.log("search time = ", Date.now()-startTime)
        
        const totalItemsFound = hits.total.value as number;  
        const products  = hits.hits.map((hit) => { 
          return hit._source
        });
      
        return {
          totalItemsFound,
          pageNumber,
          limit,
          products
        }
      }


    async getProductSearchSuggestion(searchKey): Promise<ISuggestedProductResponse> { 
        const query = {
          query: {
            prefix:{ 
                    key:{
                      value: searchKey
                    } 
                  }
                },
          }
       
        const { body: { hits } } = await this.esService.search({
          from:  0,
          size:  20,
          index: 'suggestion', 
          type:  'suggestion',
          body:  query
        });   
        const resultsCount = hits.total.value as number;  
        const values  = hits.hits.map((hit) => { 
          return hit._source.key
        });
      
        return {
          resultsCount,
          values
        }
      }

}