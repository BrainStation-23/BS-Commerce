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
        const allProduct = await ProductModel.find({}).exec()
        console.log("total product found ", allProduct.length)
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
        const result = await esclient.bulk({ body: docs }) 
        await esclient.indices.refresh({index: 'products'})
        return result.statusCode; 
    } catch (error) {
    console.log(error)
    }
}