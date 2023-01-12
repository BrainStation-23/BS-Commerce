import { deleteCartErrorMessage, deleteCartErrorResponse, deleteCartRequest, deleteCartSuccessResponse, DeleteMessage, Message } from '@bs-commerce/models';
export declare class deleteCartRequestDto implements deleteCartRequest {
    cartId: string;
}
export declare class DeleteMessageDto implements DeleteMessage {
    message: Message;
}
export declare class deleteCartSuccessResponseDto implements deleteCartSuccessResponse {
    code: number;
    data: DeleteMessageDto;
}
export declare class deleteCartErrorResponseDto implements deleteCartErrorResponse {
    code: number;
    error: deleteCartErrorMessage;
    errors: string[];
}
