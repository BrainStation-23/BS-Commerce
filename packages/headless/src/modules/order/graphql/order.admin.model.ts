import { registerEnumType } from "@nestjs/graphql";
import { OrderStatusEnum, PaymentStatusEnum, ShippingStatusEnum } from "src/entity/order";

registerEnumType(OrderStatusEnum, {
    name: 'OrderStatusEnum'
});

registerEnumType(OrderStatusEnum, {
    name: 'OrderStatusEnum'
});