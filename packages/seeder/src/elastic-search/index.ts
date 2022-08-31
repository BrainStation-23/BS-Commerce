import {Client} from '@elastic/elasticsearch'
import { bulkInsert, bulkInsertSuggestion } from './data/index.js';
import { productSearchSchema, suggestionSchema } from "./schema.js";

const {
    ELASTICSEARCH_NODE,
} = process.env;

export const esclient = new Client({
    node: ELASTICSEARCH_NODE || 'http://localhost:9200'
});
export const index = 'products';
export const type = 'products';

async function run() { 
    try {
        const isExist = await esclient.indices.exists({index});
        if(isExist.statusCode === 200){
            await esclient.indices.delete({ index }); 
        } 
        await esclient.indices.create({ index });
        await esclient.indices.close({index});
        await esclient.indices.putSettings({
            index,
            body: {
                analysis: {
                    filter: {
                        autocomplete_filter: {
                            type: 'edge_ngram',
                            min_gram: 1,
                            max_gram: 20
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
        });
        await esclient.indices.open({index});
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

run();

async function seedSuggestion(){
    try {
        const isExist = await esclient.indices.exists({index: 'suggestion'});
        if(isExist.statusCode === 200){
            await esclient.indices.delete({ index: 'suggestion' }); 
        } 
        await esclient.indices.create({ index: 'suggestion' });
        await esclient.indices.close({index: 'suggestion'});
        await esclient.indices.putSettings({
            index: 'suggestion',
            body: {
                analysis: {
                    filter: {
                        autocomplete_filter: {
                            type: 'edge_ngram',
                            min_gram: 1,
                            max_gram: 20
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
        });
        await esclient.indices.open({index: 'suggestion'});
        await esclient.indices.putMapping({ 
            index: 'suggestion', 
            type: 'suggestion',
            include_type_name: true,
            body: { 
                properties: suggestionSchema
            }
        });
        const result = await bulkInsertSuggestion();
        if(result === 200){
            console.log("Data inserted successfully")
        }
        return;
    } catch (error) {
        console.log(error)
    }
}

seedSuggestion();