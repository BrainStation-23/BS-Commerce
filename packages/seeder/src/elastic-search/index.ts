import {Client} from '@elastic/elasticsearch'
import { bulkInsert } from './data/index.js';
import { productSearchSchema } from "./schema.js";

const {
    ELASTICSEARCH_NODE,
} = process.env;

export const esclient = new Client({
    node: ELASTICSEARCH_NODE || 'http://localhost:9200'
});
export const index      = 'products';
export const type       = 'products';

async function run() { 
    try {
        const isExist = await esclient.indices.exists({index}); 
        if(isExist.statusCode === 200){
            await esclient.indices.delete({ index }); 
        } 
        await esclient.indices.create({ index });
        await esclient.indices.putMapping({ 
            index, 
            type,
            include_type_name: true,
            body: { 
                properties: productSearchSchema
            }
        });
        const result = await bulkInsert();
        if(result === 200){
            console.log("Data inserted successfully")
        }
        return;
    } catch (error) {
        console.log(error)
    }
}

run().finally(() => process.exit(0));