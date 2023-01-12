import { Product } from '../../../entity/product';
export declare class ProductSearchDatabase {
    findProductById(id: string): Promise<Product>;
}
