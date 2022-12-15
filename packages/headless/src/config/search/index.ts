const { ELASTICSEARCH_NODE } = process.env
export const searchConfig = {
    node: ELASTICSEARCH_NODE || 'http://localhost:9200'
}