import { ProductInfo, ProductMeta, UpdateProductMeta, ProductPhoto, ProductCategory, ProductManufacturer, UpdateProductManufacturer, UpdateProductRequest, Product, UpdateProductInfo, UpdateProductCategory, GetProductsByConditionQuery, GetAllProductsQuery, UpdateProductsForBrandRequest, GetCustomerAllProductsQuery, GetCustomerAllProductsResponseType } from '@bs-commerce/models';
export declare class GraphqlProductInfo implements ProductInfo {
    name: string;
    shortDescription?: string;
    fullDescription?: string;
    sku: string;
    price: number;
    oldPrice: number;
    cost: number;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    isFeatured?: boolean;
    publishDate?: Date;
}
export declare class UpdateProductInfoInput implements UpdateProductInfo {
    name?: string;
    shortDescription?: string;
    fullDescription?: string;
    sku?: string;
    price?: number;
    oldPrice?: number;
    cost?: number;
    showOnHomePage?: boolean;
    includeInTopMenu?: boolean;
    allowToSelectPageSize?: boolean;
    published?: boolean;
    displayOrder?: number;
    isFeatured?: boolean;
}
export declare class GraphqlProductMetaInput implements ProductMeta {
    keywords?: string[];
    title?: string;
    description?: string;
}
export declare class GraphqlProductMeta implements ProductMeta {
    keywords?: string[];
    title?: string;
    description?: string;
    friendlyPageName?: string;
}
export declare class UpdateProductMetaInput implements UpdateProductMeta {
    keywords?: string[];
    title?: string;
    description?: string;
    friendlyPageName?: string;
}
export declare class GraphqlProductPhoto implements ProductPhoto {
    url?: string;
    id?: string;
    title?: string;
    alt?: string;
    displayOrder?: number;
}
export declare class GraphqlProductCategory implements ProductCategory {
    id: string;
    name: string;
}
export declare class UpdateProductCategoryInput implements UpdateProductCategory {
    id?: string;
    name?: string;
}
export declare class GraphqlProductManufacture implements ProductManufacturer {
    id: string;
    name: string;
}
export declare class UpdateProductManufacturerInput implements UpdateProductManufacturer {
    name?: string;
    id?: string;
}
export declare class GraphqlProduct implements Product {
    id?: string;
    info: GraphqlProductInfo;
    meta: GraphqlProductMeta;
    tags?: string[];
    photos?: GraphqlProductPhoto[];
    brands?: string[];
    manufacturer?: GraphqlProductManufacture;
    categories: GraphqlProductCategory[];
}
export declare class GraphqlProductInput implements Product {
    info: GraphqlProductInfo;
    meta?: GraphqlProductMetaInput;
    tags?: string[];
    photos?: GraphqlProductPhoto[];
    brands?: string[];
    manufacturer?: GraphqlProductManufacture;
    categories: GraphqlProductCategory[];
}
export declare class UpdateProductInput implements UpdateProductRequest {
    info?: UpdateProductInfoInput;
    meta?: UpdateProductMetaInput;
    tags?: string[];
    photos?: GraphqlProductPhoto[];
    brands?: string[];
    manufacturer?: UpdateProductManufacturerInput;
    categories?: UpdateProductCategoryInput[];
}
export declare class SearchConditionInput implements GetProductsByConditionQuery {
    skip?: number;
    limit?: number;
    brand?: string;
    categoryId?: string;
    productName?: string;
    isFeatured?: boolean;
    slug?: string;
    orderBy?: string;
}
export declare class GetCustomerAllProductsQueryInput implements GetCustomerAllProductsQuery {
    skip?: number;
    limit?: number;
    brand?: string;
    categoryId?: string;
    productName?: string;
    isFeatured?: boolean;
    slug?: string;
    orderBy?: string;
    minPrice?: number;
    maxPrice?: number;
}
export declare class GetAllProductsQueryInput implements GetAllProductsQuery {
    skip?: number;
    limit?: number;
}
export declare class UpdateProductsForBrandBody implements UpdateProductsForBrandRequest {
    productIds: string[];
    brandId: string;
}
export declare class ProductResponse {
    code: number;
    data?: GraphqlProduct;
}
export declare class ProductSuccessMessage {
    message: string;
}
export declare class ProductDeletedResponse {
    code: number;
    data?: ProductSuccessMessage;
}
export declare class ProductArrayResponse {
    code: number;
    data?: GraphqlProduct[];
}
export declare class GetCustomerAllProductsResponse implements GetCustomerAllProductsResponseType {
    products: GraphqlProduct[];
    manufacturers: string[];
    brands: string[];
    totalProducts: number;
}
export declare class ProductArrayWithBrandAndManufacturersResponse {
    code: number;
    data?: GetCustomerAllProductsResponse;
}
export declare class ProductArrayWithCount {
    products: GraphqlProduct[];
    count: number;
}
export declare class ProductArrayWithCountResponse {
    code: number;
    data?: ProductArrayWithCount;
}
export declare class Count {
    count: number;
}
export declare class ProductCount {
    code: number;
    data?: Count;
}
