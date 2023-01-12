export declare const productSearchSchema: {
    'info.productId': {
        type: string;
    };
    'info.name': {
        type: string;
        analyzer: string;
    };
    'info.shortDescription': {
        type: string;
        analyzer: string;
    };
    'info.fullDescription': {
        type: string;
        analyzer: string;
    };
    'info.sku': {
        type: string;
        analyzer: string;
    };
    'info.price': {
        type: string;
    };
    'meta.keywords': {
        type: string;
        analyzer: string;
    };
    'meta.title': {
        type: string;
        analyzer: string;
    };
    'meta.description': {
        type: string;
        analyzer: string;
    };
    tags: {
        type: string;
        analyzer: string;
    };
    photos: {
        type: string;
        analyzer: string;
    };
    brands: {
        type: string;
        analyzer: string;
    };
    manufacturer: {
        properties: {
            id: {
                type: string;
                analyzer: string;
            };
            name: {
                type: string;
                analyzer: string;
            };
        };
    };
    categories: {
        type: string;
    };
};
