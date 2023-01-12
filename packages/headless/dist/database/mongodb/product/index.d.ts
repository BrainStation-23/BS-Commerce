import { Product, SearchCondition, UpdateProduct } from '../../../entity/product';
import { Tag } from '../../../entity/tags';
import { IProductDatabase } from '../../../modules/product/repositories/product.database.interface';
export declare class ProductDatabase implements IProductDatabase {
    findProduct(query: Record<string, any>): Promise<Product | null>;
    createProduct(product: Product): Promise<Product | null>;
    findAllProducts(query: Record<string, any>, skip?: number, limit?: number, price?: Partial<SearchCondition>, orderBy?: string): Promise<Product[] | []>;
    getAllConditionalProducts(query: Record<string, any>, price: Partial<SearchCondition>, slug: string, orderBy: 'asc' | 'desc', skip?: number, limit?: number): Promise<Product[] | []>;
    getProductCount(query: Record<string, any>): Promise<number>;
    deleteProduct(productId: string): Promise<Product | null>;
    updateProduct(product: UpdateProduct, productId: string): Promise<Product | null>;
    updateProductsForBrand(productIds: string[], brandId: string): Promise<Product[] | []>;
    getProductsList(skip: number, limit: number, query?: Record<string, any>, sortCondition?: string): Promise<Product[] | []>;
    getTag(query: Record<string, any>): Promise<Tag[]>;
    getTopSellingProducts(skip: number, limit: number): Promise<Product[] | []>;
    getNewArrivalProducts(skip: number, limit: number): Promise<Product[] | []>;
}
