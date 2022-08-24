import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { searchConfig } from "config/search";
import { ProductSrarchDatabase } from "src/database/mongodb/search";
import { productSchema } from "../rest/schema";

@Injectable()
export class ElasticService {
  constructor(private readonly esService: ElasticsearchService, private readonly productSearchDB: ProductSrarchDatabase) {}
  public async createIndex() {
    const index = searchConfig.index
    await this.esService.indices.delete({ index });
    const checkIndex = await this.esService.indices.create({ index });
    // if (!checkIndex) {
    //   this.esService.indices.create(
    //     {
    //       index,
    //       // body: {
    //       //   mappings: {
    //       //     properties: productSchema
    //           // properties: {
    //           //   email: {
    //           //     type: 'text',
    //           //     fields: {
    //           //       keyword: {
    //           //         type: 'keyword',
    //           //         ignore_above: 256,
    //           //       },
    //           //     },
    //           //   },
    //           //   tags: {
    //           //     properties: {
    //           //       tag: {
    //           //         type: 'text',
    //           //         fields: {
    //           //           keyword: {
    //           //             type: 'keyword',
    //           //             ignore_above: 256,
    //           //           },
    //           //         },
    //           //       },
    //           //     },
    //           //   },
    //           //   text: {
    //           //     type: 'text',
    //           //     fields: {
    //           //       keyword: {
    //           //         type: 'keyword',
    //           //         ignore_above: 256,
    //           //       },
    //           //     },
    //           //   },
    //           //   title: {
    //           //     type: 'text',
    //           //     fields: {
    //           //       keyword: {
    //           //         type: 'keyword',
    //           //         ignore_above: 256,
    //           //       },
    //           //     },
    //           //   },
    //           // },
    //         // },
    //         // settings: {
    //         //   analysis: {
    //         //     filter: {
    //         //       autocomplete_filter: {
    //         //         type: 'edge_ngram',
    //         //         min_gram: 1,
    //         //         max_gram: 20,
    //         //       },
    //         //     },
    //         //     analyzer: {
    //         //       autocomplete: {
    //         //         type: 'custom',
    //         //         tokenizer: 'standard',
    //         //         filter: ['lowercase', 'autocomplete_filter'],
    //         //       },
    //         //     },
    //         //   },
    //         // },
    //     //   },
    //     }
    //   )
    // }
  }

  private async createSchema(){
    await this.esService.indices.putMapping({ 
      index: searchConfig.index, 
      type: searchConfig.index,
      include_type_name: true,
      body: { 
          properties: productSchema
      }
  });
  }
  
  

    async bulkInsert(){
       try {
        await this.createIndex();
        await this.createSchema();

        const esAction = {
            index: {
              _index: searchConfig.index,
              _type: searchConfig.index
            }
          };
        
        const allProduct =  await this.productSearchDB.findAllProducts()
        let docs = []
        let data: any = {}
        const mapped = allProduct.map(e =>{ 
          console.log(e?.meta?.keywords, e?.brands)
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
            
            docs.push(esAction); 
            docs.push(data); 
        })
        
        const result = await this.esService.bulk({ body: docs }) 
        return result.statusCode;
       } catch (error) {
        console.log(error)
       }
    }


  async search(keyword: string): Promise<any>{
    return await this.getQuotes(keyword)
  }
 
  private async getQuotes(req) { 
    const query = {
      from: 0,
      size: 4,
      query: {
        multi_match:{
          query: req,
          fields: ['infoName', 'tags', 'sku', 'metaTitle', 'brands', 'categories.name', 'manufacturer.name'],
        }
      }
    }
  
    const start = Date.now()
    const { body: { hits } } = await this.esService.search({
      from:  req.page  || 0,
      size:  req.limit || 250,
      index: searchConfig.index, 
      type:  searchConfig.index,
      body:  query
    });  
    console.log("search time = ", Date.now()-start)
  
    const results = hits.total.value;
    const values  = hits.hits.map((hit) => {
      return {
        id:     hit._id,
        data:  hit._source,
        score:  hit._score
      }
    });
  
    return {
      results,
      values
    }
  }

}