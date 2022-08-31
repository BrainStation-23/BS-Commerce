import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { ProductSearchDatabase } from "src/database/mongodb/search";
import { Product } from "src/entity/product";
import { ISearchProductResponse } from "../rest/dto";
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

    async getProductSearchData(searchKey, pageNumber=1, limit=10): Promise<ISearchProductResponse> { 
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
          },
          aggs:{
            faceted_brands:{
              terms:{
                field: 'brands'
              }
            },
            category_nested: {
              nested: {
                path: 'categories'
              },   
              aggs:{
                faceted_category_id:{ 
                  terms:{
                    field: 'categories.id.keyword',
                    size: 10
                  }
                },
                faceted_category_name:{
                  terms:{
                    field: 'categories.name.keyword',
                    size: 10
                  }
                }
              }  
            }
          }
        }
      
        let startTime = Date.now()
        const { body: { hits } } = await this.esService.search({
          from:  (pageNumber-1)*limit  || 0,
          size:  limit || 30,
          index: 'products', 
          type:  'products',
          body:  query
        });  
    
    
        console.log("search time = ", Date.now()-startTime)
        
        startTime = Date.now()
        const resultsCount = hits.total.value as number; 
        const tags = hits.hits.flatMap(hit => hit._source.tags)
        const set = [...new Set(tags)].slice(0,5)
        const suggestion = hits.hits.map(hit => hit._source.info.name).slice(0,5).concat(set)
        const values  = hits.hits.map((hit) => { 
          return hit._source
        });
    
        console.log("search result formation time = ", Date.now()-startTime)
      
        return {
          resultsCount,
          values,
          suggestion
        }
      }


    async getProductSearchSuggestion(searchKey): Promise<any> { 
        const query = {
          query: {
                  match:{
                    key:{
                      query: searchKey,
                      fuzziness: 'AUTO'
                    } 
                  }
                },
              }
        console.log(searchKey)
       
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