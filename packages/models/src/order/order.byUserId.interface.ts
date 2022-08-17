import { OrderResponseData } from "./order.response.interface";

export type OrderByUserIdResponseData = Omit<OrderResponseData, "userId">
