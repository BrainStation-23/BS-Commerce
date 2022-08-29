import { AddToWishlistRequestDto } from 'src/modules/wishlist/rest/dto';
import { TestProductId } from '../../test-utility/predefined.data';

export const invalidWishlistItem = {
    productId: TestProductId
}

export const validWishlistItem: AddToWishlistRequestDto = {
    productId: TestProductId,
    quantity: 2
}

export const updateValidWishlistItem: AddToWishlistRequestDto = {
    productId: TestProductId,
    quantity: 7
}