import { Injectable } from '@nestjs/common';
import { Plugin } from 'src/entity/plugin';

@Injectable()
export abstract class IPluginDatabase {
  abstract createPlugin: (plugin: Plugin) => Promise<Plugin>;
  abstract getPluginList: () => Promise<Plugin[]>;
}
