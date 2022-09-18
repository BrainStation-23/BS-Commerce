import { CreateOrderRequest, IReOrderQuery } from "@bs-commerce/models";

const createOrderRequest: CreateOrderRequest = {
    billingAddress: {
      firstName: 'test',
      lastName: 'test',
      email: 'test@mail.com',
      addressLine1: 'test',
      addressLine2: 'test',
      city: 'test',
      country: 'test',
      postCode: '3421',
      phoneNumber: '01314998877',
    },
    shippingAddress: {
      firstName: 'test',
      lastName: 'test',
      email: 'test@mail.com',
      addressLine1: 'test',
      addressLine2: 'test',
      city: 'test',
      country: 'test',
      postCode: '3421',
      phoneNumber: '01314998877',
    },
    shippingMethod: 'test',
    paymentMethod: 'test',
    productCost: 100,
    shippingCost: 100,
    products: [
      {
        productId: '052eeb8f-6a08-438d-8799-2fb0bb8d7d98',
        name: 'test',
        price: 100,
        quantity: 2,
        sku: 'string',
      },
    ],
    stripeToken: '',
    stripeCustomerId: '',
    stripeChargeId: '',
    paypalPaymentId: '',
    paypalRedirectUrl: '',
};

const reOrderQuery: IReOrderQuery = {
  orderId: "173137531326110",
  ignoreInvalidItems: true,
  overWriteCart: false
}

const InvalidReOrderQuery: IReOrderQuery = {
  orderId: "173137531dddd10",
  ignoreInvalidItems: false,
  overWriteCart: false
}
const changeStatusBody = {
  orderId: "173137531326110",
  statusType: "orderStatusEnums",
  statusValue: "Processing"
}

const InvalidChangeStatusBody = {
  orderId: "173ss531326110",
  statusType: "orderStatusEnums",
  statusValue: "Processing"
}
export {
  createOrderRequest,
  reOrderQuery,
  InvalidReOrderQuery,
  changeStatusBody,
  InvalidChangeStatusBody
}