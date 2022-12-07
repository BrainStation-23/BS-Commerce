import { PluginBaseConfig } from "../base/config.type";

export interface NewModulePluginConfig extends PluginBaseConfig {
    //name: string;
    extensibleFor: 'NEW_MODULE',
    version: string;
    //description: string;
    //author: string;
    //isLoadable: boolean;
}
