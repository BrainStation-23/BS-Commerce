import { IOrderAddress } from "./order.create.interface";
import { OrderProductData } from "./order.product.interface";
import { OrderResponseData } from "./order.response.interface";

export type OrderByUserIdResponseData = Omit<OrderResponseData, "userId">