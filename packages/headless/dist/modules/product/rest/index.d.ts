import { Response } from 'express';
import { ProductService } from '../services';
import { CreateProductDto, DeleteProductParamsDto, GetAllProductsQueryDto, GetCustomerAllProductsQueryDto, GetCustomerProductByURLParamsDto, GetCustomerProductParamsDto, GetProductBySKUParamsDto, GetProductParamsDto, GetProductsByConditionQueryDto, UpdateProductDto, UpdateProductParamsDto, updateProductsForBrandRequestDto } from './dto';
import { GetCustomizedProductsQueryDto } from './dto/customizedProduct.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getCustomerAllProducts(condition: GetCustomerAllProductsQueryDto, res: Response): Promise<{
        data: import("@bs-commerce/models").GetCustomerAllProductsResponseType;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomerAllProductsErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getCustomerProductByURL(params: GetCustomerProductByURLParamsDto, res: Response): Promise<{
        data: import("@bs-commerce/models").CustomerProduct;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomerProductErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getCustomerProduct(params: GetCustomerProductParamsDto, res: Response): Promise<{
        data: import("@bs-commerce/models").CustomerProduct;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomerProductErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getCustomerHomePageProducts(res: Response): Promise<{
        data: import("@bs-commerce/models").CustomerProduct[];
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomerAllHomePageProductsErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getAllProducts(query: GetAllProductsQueryDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Product[];
        code: number;
    } | {
        error: import("@bs-commerce/models").GetAllProductsErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getProductCount(res: Response): Promise<{
        data: {
            count: number;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").GetProductCountErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getProductBySKU(params: GetProductBySKUParamsDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Product;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetProductBySKUErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getProductsByCondition(condition: GetProductsByConditionQueryDto, res: Response): Promise<{
        data: import("@bs-commerce/models").GetProductsObject;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetProductsByConditionErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getProduct(params: GetProductParamsDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Product;
        code: number;
    } | {
        error: import("@bs-commerce/models").GetProductErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    addProduct(product: CreateProductDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Product;
        code: number;
    } | {
        error: import("@bs-commerce/models").CreateProductErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    deleteProduct(params: DeleteProductParamsDto, res: Response): Promise<{
        data: {
            message?: import("@bs-commerce/models").DeleteProductSuccessMessage;
        };
        code: number;
    } | {
        error: import("@bs-commerce/models").DeleteProductErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    updateProductsForBrand(data: updateProductsForBrandRequestDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Product[];
        code: number;
    } | {
        error: import("@bs-commerce/models").UpdateProductsForBrandErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    updateProduct(product: UpdateProductDto, params: UpdateProductParamsDto, res: Response): Promise<{
        data: Product;
        code: number;
    } | {
        error: import("@bs-commerce/models").UpdateProductErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
    getCustomizedProducts(condition: GetCustomizedProductsQueryDto, res: Response): Promise<{
        data: import("@bs-commerce/models").Product[];
        code: number;
    } | {
        error: import("@bs-commerce/models").GetCustomizedProductsErrorMessages;
        errors: DescriptiveError;
        code: number;
    }>;
}
