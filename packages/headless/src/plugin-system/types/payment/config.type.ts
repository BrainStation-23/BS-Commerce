import { PluginBaseConfig } from "../base/config.type";

export interface PaymentPluginConfig extends PluginBaseConfig {
    //name: string;
    extensibleFor: "PAYMENT",
    //version: string;
    //description: string;
    //author: string;
    displayData: {
        name: string;
        title: string;
        logo: string;
    }
}