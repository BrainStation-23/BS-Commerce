import { PaymentPluginConfig } from "src/plugin-system/types/payment/config.type";

export const config: PaymentPluginConfig = {
    name: "bkash",
    path: 'payment/bkash',
    extensibleFor: "PAYMENT",
    version: "1.0.0",
    description: "Bkash plugin for payment extension",
    author: "Anjar",
    displayData: {
        name: "bkash",
        title: "bKash",
        logo: "https://bkash.logo.png"
    },
    env: {
        access_id: {
            type: Number,
            isRequired: true
        },
        access_password: {
            type: String,
            isRequired: true
        },
        merchant_url: {
            type: String,
            isRequired: true
        },
        // is_direct_charge: {
        //     type: (value: any) => {
        //         if (value === 'true' || value === 'false')
        //             return value === 'true';
        //         throw new Error(`Invalid value ${value}. Expected one of ['true', 'false']`)
        //     },
        //     isRequired: false
        // }
        is_direct_charge: {
            type: Boolean,
            isRequired: false
        }
    }
}
