import { InitiatePaymentEntity } from "./entity";
const store_id = 'bscom631b102b78189'
const store_passwd = 'bscom631b102b78189@ssl'
const is_live = false //true for live, false for sandbox
let post_body: InitiatePaymentEntity = {
    total_amount: 150.25,
    currency: "BDT",
    tran_id: "sdgdfsgereee",
    success_url: "http://localhost:3000/api/sslEcommerce/success-payment",
    fail_url: "http://localhost:3000/api/sslEcommerce/failure-payment",
    cancel_url: "http://localhost:3000/api/sslEcommerce/cancel-payment",
    ipn_url: "http://localhost:3000/api/sslEcommerce/notification",
    emi_option: 0,
    cus_name: "tahsin",
    cus_email: "safasadaf3@gmail.com",
    cus_phone: "01742593730",
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_country: "bangladesh",
    shipping_method: "NO",
    multi_card_name: "",
    num_of_item: 1,
    product_name: "none",
    product_category: "none",
    product_profile: "general",
    store_id: 'bscom631b102b78189',
    store_passwd: 'bscom631b102b78189@ssl',
    is_live: false
};

export {
    post_body,
    store_id,
    store_passwd,
    is_live
};