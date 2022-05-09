export class Product {
  id: string;
  info: {
    name: string,
    shortDescription: string,
    fullDescription: string,
    sku: string,
    price: number
  };
  photos: [{
    id: string,
    title: string,
    alt: string,
  }]
}