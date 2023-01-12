import { Helper } from '../../../helper/helper.interface';
import { SearchCondition, UpdateProduct } from '../../../entity/product';
import { ProductRepository } from '../repositories';
import { CreateProductResponse, GetProductResponse, GetAllProductsResponse, GetProductCountResponse, GetProductBySKUResponse, DeleteProductResponse, UpdateProductResponse, GetProductsByConditionResponse, UpdateProductsForBrandResponse, GetCustomerAllProductsResponse, GetCustomerProductResponse, GetCustomerAllHomePageProductsResponse, CreateProductRequest, GetCustomizedProductsQuery, GetCustomizedProductsResponse } from '@bs-commerce/models';
export declare class ProductService {
    private productRepo;
    private helper;
    constructor(productRepo: ProductRepository, helper: Helper);
    createProduct(product: CreateProductRequest): Promise<CreateProductResponse>;
    getProduct(productId: string): Promise<GetProductResponse>;
    urlGenerate(productName: string): Promise<string>;
    getAllProducts(condition: SearchCondition): Promise<GetAllProductsResponse>;
    getProductCount(): Promise<GetProductCountResponse>;
    getProductBySKU(sku: string): Promise<GetProductBySKUResponse>;
    deleteProduct(productId: string): Promise<DeleteProductResponse>;
    updateProduct(product: UpdateProduct, productId: string): Promise<UpdateProductResponse>;
    updateProductsForBrand(productIds: string[], brandId: string): Promise<UpdateProductsForBrandResponse>;
    getProductsByCondition(condition: SearchCondition): Promise<GetProductsByConditionResponse>;
    generateSearchQuery(condition: SearchCondition): object;
    getCustomerProduct(productId: string): Promise<GetCustomerProductResponse>;
    getCustomerProductByURL(url: string): Promise<GetCustomerProductResponse>;
    getCustomerAllHomePageProducts(): Promise<GetCustomerAllHomePageProductsResponse>;
    getCustomerProductsByCondition(condition: SearchCondition): Promise<GetCustomerAllProductsResponse>;
    getCustomizedProducts(condition: GetCustomizedProductsQuery): Promise<GetCustomizedProductsResponse>;
    getProductByTags(skip: number, limit: number, tag: string): Promise<import("../../../entity/product").Product[]>;
}
