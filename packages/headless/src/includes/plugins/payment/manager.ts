
import { PluginModel } from 'src/database/mongodb/plugin/plugin.model';
import { Plugin } from 'src/entity/plugin';

class PluginManager {
    private static pluginManager: PluginManager;
    private readonly pluginList: any[] = [];

    private constructor() {}

    public static getInstance(): PluginManager {
        if(!PluginManager.pluginManager) {
            PluginManager.pluginManager = new PluginManager();
        }
        return PluginManager.pluginManager;
    }

    public async loadPlugins(): Promise<any> {
        const plugins = await PluginModel.find({});
        plugins.forEach(plugin => {
            this.loadPlugin(plugin);
        });
    }

    async loadPlugin(pluginInfo: Plugin) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });

        const path = require('path');
        const relativePath = path.relative('src/modules/payment/plugins', pluginInfo.path);
        const plugin = require(relativePath);
        this.pluginList.push(plugin);
    }

    public getPluginList() {
        return this.pluginList;
    }
}

const pluginManager = PluginManager.getInstance()
pluginManager.loadPlugins();

export default pluginManager;
