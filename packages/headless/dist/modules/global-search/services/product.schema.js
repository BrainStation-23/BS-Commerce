"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSearchSchema = void 0;
exports.productSearchSchema = {
    'info.productId': {
        type: 'text',
    },
    'info.name': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    'info.shortDescription': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    'info.fullDescription': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    'info.sku': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    'info.price': {
        type: 'integer',
    },
    'meta.keywords': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    'meta.title': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    'meta.description': {
        type: 'text',
        analyzer: 'autocomplete',
    },
    tags: {
        type: 'text',
        analyzer: 'autocomplete',
    },
    photos: {
        type: 'text',
        analyzer: 'autocomplete',
    },
    brands: {
        type: 'text',
        analyzer: 'autocomplete',
    },
    manufacturer: {
        properties: {
            id: {
                type: 'text',
                analyzer: 'autocomplete',
            },
            name: {
                type: 'text',
                analyzer: 'autocomplete',
            },
        },
    },
    categories: {
        type: 'nested',
    },
};
//# sourceMappingURL=product.schema.js.map