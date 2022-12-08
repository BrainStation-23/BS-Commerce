import { Injectable } from '@nestjs/common';
import { Plugin } from 'src/entity/plugin';
import { IPluginDatabase } from './plugin.db.interface';

@Injectable()
export class PluginRepository {
  constructor(private db: IPluginDatabase) {}

  async createPlugin(plugin: Plugin): Promise<Plugin> {
    return await this.db.createPlugin(plugin);
  }

  async getPluginList(): Promise<Plugin[]> {
    return await this.db.getPluginList();
  }
}
