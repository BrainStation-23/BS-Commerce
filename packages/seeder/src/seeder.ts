import * as fs from 'fs'
import { Model } from 'mongoose'
import * as path from 'path'
import BrandModel from './brand/brand.model'
import CategoryModel from './category/category.model'
import { brands, categories, manufacturers, products, tags } from './data'
import ManufacturerModel from './manufacturer/manufacturer.model'
import { connectToDatabase } from './mongodb.connect'
import ProductModel from './product/product.model'
import TagsModel from './tags/tags.model'

const run = async ()=>{
    await connectToDatabase();
    await getDataFiles()
}

// get list of data file
const getDataFiles = async ()=>{
   const fileList = fs.readdirSync('src/data')
   
   fileList.forEach( async file=>{
    if(path.parse(file).ext === '.ts'){
        const name = path.parse(file).name
        switch(name){
            case 'products': 
                await inserData(ProductModel, products)
                break;
            case 'brands':
                await inserData(BrandModel, brands)
                break;
            case 'categories':
                await inserData(CategoryModel, categories)
                break;
            case 'manufacturers':
                await inserData(ManufacturerModel, manufacturers)
                break;
            case 'tags':
                await inserData(TagsModel, tags)
                break;
            default:
                console.log('Data file not matched')
        }
    }
   }) 
}

const inserData = async <T>(model: Model<T>, data: any)=>{
    await model.collection.drop()
    const mapped =  data.map(e =>{
        delete e?._id
        delete e?.createdAt
        delete e?.updatedAt
        return e
    })
 
    await model.insertMany(mapped)
    console.log(model.collection.name,'data inserted.')
}


run()