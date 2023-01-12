import { CartService } from '../services';
import { User } from '../../../entity/user';
import { deleteCartItemRequestSchema, deleteCartRequestSchema, ItemInput, updateCartItemRequestSchema } from './cart.model';
import { Helper } from '../../../helper/helper.interface';
export declare class CartResolver {
    private cartService;
    private helper;
    constructor(cartService: CartService, helper: Helper);
    getCart(user: User): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    addToCart(item: ItemInput, user: User): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    deleteCart(data: deleteCartRequestSchema): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    updateCartItem(user: User, item: updateCartItemRequestSchema): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    deleteCartItem(user: User, data: deleteCartItemRequestSchema): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
    deleteAllCartItems(user: User): Promise<import("../../../helper/serviceResponse/service.response.interface").ServiceSuccessResponse | import("../../../helper/serviceResponse/service.response.interface").ServiceErrorResponse | import("@nestjs/common").HttpException>;
}
