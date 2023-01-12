import { DeleteProductParams, DeleteProductErrorMessages, DeleteProductErrorResponse, DeleteProductSuccessResponse, DeleteProductSuccessMessage } from '@bs-commerce/models';
export declare class DeleteProductParamsDto implements DeleteProductParams {
    productId: string;
}
export declare class DeleteProductErrorResponseDto implements DeleteProductErrorResponse {
    code: number;
    error: DeleteProductErrorMessages;
    errors: string[];
}
declare class DeleteProductMessage {
    message: DeleteProductSuccessMessage.PRODUCT_DELETED_SUCCESSFUL;
}
export declare class DeleteProductSuccessResponseDto implements DeleteProductSuccessResponse {
    code: number;
    data: DeleteProductMessage;
}
export {};
