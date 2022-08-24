const {ELASTICSEARCH_NODE, ELASTICSEARCH_INDEX } = process.env
export const searchConfig = {
    node: ELASTICSEARCH_NODE,
    index: ELASTICSEARCH_INDEX
}