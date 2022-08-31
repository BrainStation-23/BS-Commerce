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
        await connectToDatabase();  
        const totalCount = await ProductModel.countDocuments().exec()
        const limit = 20;
        let result = 0;

        for(let skip=0; skip<totalCount; skip=skip+limit){ 
            const allProduct = await ProductModel.find({}).skip(skip).limit(limit).exec()
            console.log("product count for insertion", allProduct.length)
            if(!allProduct || allProduct.length < 1){
                return 0;
            }
            const esAction = {
            index: {
                _index: 'products',
                _type: 'products'
            }
            } 
            let docs = []  
            const mapped = allProduct.map(e =>{ 
                const data = mapSearchData(e)  
                docs.push(esAction); 
                docs.push(data); 
            })    
            const { statusCode } = await esclient.bulk({ body: docs })
            result = statusCode
        } 
        await esclient.indices.refresh({index: 'products'}) 
        return result
    } catch (error) {
        console.log(error)
    }
}

export async function bulkInsertSuggestion(){
    try {
        await connectToDatabase();  
        const totalCount = await ProductModel.countDocuments().exec()
        const limit = 20;
        let result = 0;

        for(let skip=0; skip<totalCount; skip=skip+limit){ 
            const allProduct = await ProductModel.find({}).skip(skip).limit(limit).exec()
            console.log("product count for insertion", allProduct.length)
            if(!allProduct || allProduct.length < 1){
                return 0;
            }
            const esAction = {
            index: {
                _index: 'suggestion',
                _type: 'suggestion'
            }
            } 
            let docs = []  
            allProduct.forEach(e =>{  
                if (e?.info?.name) {
                    docs.push(esAction); 
                    docs.push({key: e?.info?.name});
                }
                e?.tags.forEach(tag => {
                    docs.push(esAction); 
                    docs.push({key: tag});
                });
            })   

            console.log(docs)
            const { statusCode, body } = await esclient.bulk({ body: docs })
            console.log(body, statusCode)
            result = statusCode
        } 
        await esclient.indices.refresh({index: 'suggestion'}) 
        return result
    } catch (error) {
        console.log(error)
    }
}