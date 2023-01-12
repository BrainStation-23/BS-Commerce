import { Product, SearchCondition, UpdateProduct } from '../../../entity/product';
import { IProductDatabase } from './product.database.interface';
import { Tag } from '../../../entity/tags';
export declare class ProductRepository {
    private readonly db;
    constructor(db: IProductDatabase);
    findProduct(query: Record<string, any>): Promise<Product | null>;
    findAllProducts(query: Record<string, any>, skip?: number, limit?: number, price?: Partial<SearchCondition>, orderBy?: string): Promise<Product[]>;
    getAllConditionalProducts(query: Record<string, any>, price: Partial<SearchCondition>, slug: string, orderBy: string, skip?: number, limit?: number): Promise<Product[]>;
    createProduct(product: Product): Promise<Product | null>;
    getProductCount(query: Record<string, any>): Promise<number>;
    deleteProduct(productId: string): Promise<Product | null>;
    updateProduct(product: UpdateProduct, productId: string): Promise<Product | null>;
    updateProductsForBrand(productIds: string[], brandId: string): Promise<Product[] | null>;
    getProductsList(skip: number, limit: number, query?: Record<string, any>, sortCondition?: string): Promise<Product[] | []>;
    getTopSellingProducts(skip: number, limit: number): Promise<Product[] | []>;
    getNewArrivalProducts(skip: number, limit: number): Promise<Product[] | []>;
    getTag(query: Record<string, any>): Promise<Tag[] | []>;
}
