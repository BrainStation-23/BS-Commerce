const enum PluginType {
    extension_plugin = 'EXTENSION PLUGIN',
    module_plugin = 'MODULE PLUGIN'
}
export class Plugin {
    id?: string;
    name: string;
    extensibleFor: string;
    isLoadable: boolean;
    version?: string;
    description?: string;
    author?: string;
    path: string;
    env?: Object;
    displayData?: Object;
    loadable: string;
    //type?: PluginType;
}