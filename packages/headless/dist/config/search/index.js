"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchConfig = void 0;
const { ELASTICSEARCH_NODE } = process.env;
exports.searchConfig = {
    node: ELASTICSEARCH_NODE || 'http://localhost:9200'
};
//# sourceMappingURL=index.js.map