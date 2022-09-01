import { connectToDatabase } from "../../mongodb.connect"
import {ProductModel} from '../../product/product.model'
import { esclient } from ".."
import { Product } from "models"

function mapSearchData(e: Product): Record<string, any> { 
    let data: any = {}
    data.info = {}
    data.meta = {} 

    data.info.productId = e.id || ''
    data.info.name = e?.info?.name || ''
    data.info.shortDescription = e?.info?.shortDescription || ''
    data.info.fullDescription = e?.info?.fullDescription || ''
    data.info.sku = e?.info?.sku || ''
    data.info.price = e?.info?.price || 0

    data.meta.keywords = e?.meta?.keywords || []
    data.meta.title = e?.meta?.title || ''
    data.meta.description = e?.meta?.description || ''

    data.brands = e?.brands || []
    data.categories = e?.categories.map(c => { return {id: c?.id, name: c?.name}}) || []
    data.manufacturer = e?.manufacturer  || {}
    data.photos = e?.photos.map(p => p.url)  || []
    data.tags = e?.tags || []

    return data;
} 

export async function bulkInsert(){
    try {
        const start = Date.now()
        await connectToDatabase();  
        const totalCount = await ProductModel.countDocuments().exec()
        console.log("Total mongodb product count = ", totalCount)
        const limit = 20;
        let result = 0;
        let step = 1;
        for(let skip=0; skip<totalCount; skip=skip+limit){ 
            console.log("Insertion step = ", step++)
            const allProduct = await ProductModel.find({}).skip(skip).limit(limit).exec()
            if(!allProduct || allProduct.length < 1){
                return 0;
            }
            const esActionProduct = {
                index: {
                    _index: 'products',
                    _type: 'products'
                }
            }
            const esActionSuggestion = {
                index: {
                    _index: 'suggestion',
                    _type: 'suggestion'
                }
            }  
            let productDocs = []
            let suggestiontDocs = []
            const mapped = allProduct.map(e =>{ 
                // prepare product data
                const data = mapSearchData(e)  
                productDocs.push(esActionProduct); 
                productDocs.push(data); 

                // prepare suggestion data with name and tags
                if (e?.info?.name) {
                    suggestiontDocs.push(esActionSuggestion); 
                    suggestiontDocs.push({key: e?.info?.name});
                }
                e?.tags.forEach(tag => {
                    suggestiontDocs.push(esActionSuggestion); 
                    suggestiontDocs.push({key: tag});
                });
            })    
            const { statusCode } = await esclient.bulk({ body: productDocs })
            await esclient.bulk({ body: suggestiontDocs })
            result = statusCode
        } 
        await esclient.indices.refresh({index: 'products'}) 
        await esclient.indices.refresh({index: 'suggestion'})

        console.log("total insertion time = ", Date.now() - start)
        let count  = await esclient.count({index:'products'})
        console.log("total inserted products = ",count.body.count)
        count = await esclient.count({index:'suggestion'})
        console.log("total inserted suggestions", count.body.count)
        return result
    } catch (error) {
        console.log(error)
    }
}