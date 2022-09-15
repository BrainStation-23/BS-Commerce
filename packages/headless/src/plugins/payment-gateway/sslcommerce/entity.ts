export class InitiatePaymentEntity{
    total_amount: number;
    currency: string;
    tran_id: string;
    success_url: string;
    fail_url: string;
    cancel_url: string;
    ipn_url: string;
    emi_option: number;
    cus_name: string;
    cus_email: string;
    cus_phone: string;
    cus_add1: string;
    cus_city: string;
    cus_country: string;
    shipping_method: string;
    multi_card_name?: string;//Do not Use! If you do not customize the gateway list
    num_of_item: number;
    product_name: string;
    product_category: string;
    product_profile: string;
    store_id: string;
    store_passwd: string;
    is_live: boolean
}
