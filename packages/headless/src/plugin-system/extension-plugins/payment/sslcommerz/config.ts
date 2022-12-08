import { PaymentPluginConfig } from "src/plugin-system/types/payment/config.type";
export const config: PaymentPluginConfig = {
    name: 'sslcommerz',
    path: 'payment/sslcommerz',
    extensibleFor: "PAYMENT",
    version: "1.0.0",
    description: "SSLCommerz plugin for payment extension",
    author: "Tahsin",
    displayData: {
        name: "sslcommerz",
        title: "sslcommerz",
        logo: "https://sslcommerz.logo.png"//find real pic
    },
    env: {
        success_url: {
            type: String,
            isRequired: true
        },
        fail_url: {
            type: String,
            isRequired: true
        },
        ipn_url: {
            type: String,
            isRequired: true
        },
        store_id: {
            type: String,
            isRequired: true
        },
        store_password: {
            type: String,
            isRequired: true
        },
        is_live: {
            type: Boolean,
            isRequired: true
        }
    }
}