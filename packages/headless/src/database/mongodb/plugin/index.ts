import { Injectable } from '@nestjs/common';
import { Plugin } from 'src/entity/plugin';
import { IPluginDatabase } from 'src/modules/plugin/repositories/plugin.db.interface';
import { PluginModel } from './plugin.model';

@Injectable()
export class PluginDatabase implements IPluginDatabase {
    async createPlugin(plugin: Plugin): Promise<Plugin> {
        const createdPlugin = await PluginModel.create(plugin);
        const newPlugin = createdPlugin?.toJSON();
        return newPlugin;
    }

    async getPluginList(): Promise<Plugin[]> {
        const plugins = await PluginModel.find({});
        return plugins;
    }
}