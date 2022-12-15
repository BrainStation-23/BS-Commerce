export type PluginExtinsibleFor = 'PAYMENT' | 'ORDER_HOOK' | 'NEW_MODULE';

// for valid case return the parsed value otherwise throw error;
type CustomConstructor = (value: any) => any;
export interface PluginBaseConfig {
    id?: string;
    name: string;
    path: string;
    extensibleFor: PluginExtinsibleFor;
    version: string;
    description: string;
    author: string;
    isLoadable?: boolean;
    displayData?: {
        [key: string]: string
    }
    env: {
        [key: string]: {
            type: NumberConstructor | StringConstructor | BooleanConstructor | CustomConstructor;
            isRequired: boolean;
        }
    }
};