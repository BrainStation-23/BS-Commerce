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

    mapSearchData(e: Product): Record<string, any> { 
        let data: any = {}
        data.info = {}
        data.meta = {} 
    
        data.id = e.id || ''
        data.info.name = e?.info?.name || ''
        data.info.shortDescription = e?.info?.shortDescription || ''
        data.info.fullDescription = e?.info?.fullDescription || ''
        data.info.sku = e?.info?.sku || ''
        data.info.price = e?.info?.price || 0
        data.info.oldPrice = e?.info?.oldPrice || 0
        data.info.cost = e?.info?.cost || 0
    
        data.meta.keywords = e?.meta?.keywords || []
        data.meta.title = e?.meta?.title || ''
        data.meta.description = e?.meta?.description || ''
    
        data.brands = e?.brands || []
        data.categories = e?.categories.map(c => { return {id: c?.id, name: c?.name}}) || []
        data.manufacturer = e?.manufacturer  || {}
        data.photos = e?.photos.map(p => {
            return {
                url: p.url,
                title: p.title,
                alt: p.alt
            }
        })
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


      async singleProductInsertInElasticSearch(productId: string): Promise<number> {
        try {
          const index = 'products';
          const productData = await this.productSearchDB.findProductById(productId);
          if (!productData) {
            console.log('Product not found');
            return 0;
          }
          const body = await this.mapSearchData(productData);
          const result = await this.esService.index({ index, refresh: true, body });
          return result.statusCode;
        } catch (error) {
          console.log(error);
          return 0;
        }
      }
    
      async deleteFromElasticSearchByproductId(id: string): Promise<number> {
        try {
          const index = 'products';
          const type = 'products';
          const body = {
            query: {
              bool:{
                must:{
                  match: { id: id },
                }
              }
            },
          };
          const result = await this.esService.deleteByQuery({ index, type, body });
          console.log("ESDB product delete count = ",result.body.deleted)
          return result.statusCode;
        } catch (error) {
          console.log(error);
          return 0;
        }
      }

}