export const productSearchSchema = {
  id: {
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
    type: "integer",
  },
  "info.oldPrice": {
    type: "integer",
  },
  'info.cost': {
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
    type: 'keyword',
  },
  photos: {
    type: 'nested',
  },
  brands: {
    type: 'keyword',
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

export const suggestionSchema = {
  key: {
    type: 'text',
  },
};
