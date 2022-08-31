export const productSearchSchema = {
  'info.productId': {
    type: 'text', 
  },
  'info.name': {
    type: 'text', 
    analyzer: 'autocomplete'
  },
  'info.shortDescription': {
    type: 'text',
    analyzer: 'autocomplete' 
  },
  'info.fullDescription': {
    type: 'text',
    analyzer: 'autocomplete' 
  },
  'info.sku': {
    type: 'text',
    analyzer: 'autocomplete'
  },
  'info.price': {
    type: 'integer',
  },
  'meta.keywords': {
    type: 'text',
    analyzer: 'autocomplete'
  },
  'meta.title': {
    type: 'text',
    analyzer: 'autocomplete'
  },
  'meta.description': {
    type: 'text',
    analyzer: 'autocomplete' 
  },
  tags: {
    type: 'keyword',
  },
  photos: {
    type: 'text',
    analyzer: 'autocomplete'
  },
  brands: {
    type: 'keyword',
  },
  manufacturer: {
    properties: {
      id: {
        type: 'text',
        analyzer: 'autocomplete'
      },
      name: {
        type: 'text',
        analyzer: 'autocomplete'
      },
    },
  },
  categories: {
    type: 'nested',
  },
};


export const suggestionSchema = {
  key:{
    type: 'text'
  }
}