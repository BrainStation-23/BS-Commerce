import { connectToDatabase } from "../../mongodb.connect"
import {ProductModel} from '../../product/product.model'
import { esclient } from ".."

function mapSearchData(e: any): Record<string, any> { 
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