import {Client} from '@elastic/elasticsearch'
import { bulkInsert } from './data/index.js';
import { productSearchSchema, suggestionSchema } from "./schema.js";
interface IINdex{
    index: string
}

const {
    ELASTICSEARCH_NODE,
} = process.env;

export const esclient = new Client({
    node: ELASTICSEARCH_NODE || 'http://localhost:9200'
});

function putSettingsBody(){
    return {
        analysis: {
            filter: {
                autocomplete_filter: {
                    type: 'edge_ngram',
                    min_gram: 3,
                    max_gram: 10
                }
            },
            analyzer: {
                autocomplete: {
                    type: 'custom',
                    tokenizer: 'standard',
                    filter: [
                        'lowercase',
                        'autocomplete_filter'
                    ]
                }
            }
        }
    }
}


async function setupIndex(index: IINdex){
    try {
        const isExist = await esclient.indices.exists(index);
        if(isExist.statusCode === 200){
            console.log(index.index, " Index is found and will be reset now!")
            await esclient.indices.delete(index); 
        } 
        await esclient.indices.create(index);
        await esclient.indices.close(index);
        await esclient.indices.putSettings({
            index: index.index,
            body: putSettingsBody()
        });
        await esclient.indices.open(index);

        let schema: any = productSearchSchema;
        if(index.index === 'suggestion'){
            schema = suggestionSchema
        }
        
        await esclient.indices.putMapping({ 
            index: index.index, 
            type: index.index,
            include_type_name: true,
            body: { 
                properties: schema
            }
        });
        return;
    } catch (error) {
        console.log(error)
    }
}

async function run() { 
    try {
        await setupIndex({index: 'products'})
        await setupIndex({index: 'suggestion'});
        const result = await bulkInsert();
        if(result === 200){
            console.log("Data inserted successfully")
        }
        return;
    } catch (error) {
        console.log(error)
    }
}

run();
