import { IOrderProduct, IOrderProductPhoto } from '@bs-commerce/models';
export declare class OrderProductPhotoDto implements IOrderProductPhoto {
    url: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class OrderProductDto implements IOrderProduct {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    sku: string;
    photos?: OrderProductPhotoDto[];
    totalPrice: number;
}
