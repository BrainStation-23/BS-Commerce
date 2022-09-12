interface Plugin {
    module: any;
    isLoadable: boolean;
}

class PluginManager {
    private static pluginManager: PluginManager;
    private readonly pluginModuleList: any[] = [];

    private constructor() { }

    public static getInstance(): PluginManager {
        if (!PluginManager.pluginManager) {
            PluginManager.pluginManager = new PluginManager();
        }
        return PluginManager.pluginManager;
    }

    public register(plugin: Plugin): void {
        if (plugin.isLoadable) {
            this.pluginModuleList.push(plugin.module);
        }
    }

    public getPluginModuleList() {
        return this.pluginModuleList;
    }
}

export const pluginManager: PluginManager = PluginManager.getInstance();