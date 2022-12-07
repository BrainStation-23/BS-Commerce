import { randomUUID } from 'crypto';

import { PluginRepository } from './../modules/plugin/repositories/index';
import { Plugin } from 'src/entity/plugin';
import { PluginConfig } from './types/base/index.type';
import { PluginExtinsibleFor } from './types/base/config.type';
import { LoadablePluginPathList } from './extension-plugins';//fetch this from db
import { LoadableModuleList } from './module-plugins';
import { PluginModel } from 'src/database/mongodb/plugin/plugin.model';

type PluginListType = {
  [key in PluginExtinsibleFor]: {
    [index: string]: {
      displayData?: object;
      config: PluginConfig;
      plugin: new (config?: any) => object;
      env?: object;
    };
  };
};
//const { NAGAD_ACCESS_ID } = process.env;

class PluginManager {
  private static pluginManager: PluginManager;
  private readonly pluginList: PluginListType = {
    NEW_MODULE: {},
    ORDER_HOOK: {},
    PAYMENT: {},
  };
  //private pluginRepo: PluginRepository;

  private constructor() {
    this.loadPlugins();
  }

  public static getInstance(): PluginManager {
    if (!PluginManager.pluginManager) {
      PluginManager.pluginManager = new PluginManager();
    }
    return PluginManager.pluginManager;
  }

  public async loadPlugins(): Promise<any> {
    let plugins;
    try{
      plugins = await PluginModel.find({loadable: true}).lean().exec();
    }catch(err){
      console.log(err);
      return null;
    }

    for await (const plugin of plugins) {
      this.loadPlugin(plugin);
    }
  }

  async loadPlugin(plugin: Plugin) {
    let pluginInstance;
    try{
      pluginInstance = (await import(`./extension-plugins/${plugin.path}/index.js`)) as new () => any;
    }catch(err){
      console.log(err);
      return null;
    }

    const { name, env } = plugin;
    delete plugin.env;
    this.pluginList[plugin.extensibleFor][plugin.name] = {
      plugin: pluginInstance,
      displayData: plugin.extensibleFor === 'PAYMENT' ? plugin.displayData : {},
      config: plugin,
      env,
    };
  }

  private async installPlugin(pluginPath: string): Promise<any>{
    const pluginEnv = {};
    //const plugin = await import(`./extension-plugins/${pluginPath}/index.js`) as (new () => any);
    const { config } = await import(`./extension-plugins/${pluginPath}/config.js`) as { config: PluginConfig };
    const { name, env } = config;
    const id = randomUUID();

    for (const key in env) {
      const envName = name.concat('_', key).toUpperCase();
      const envValue = process.env[envName];
      try {
          if (env[key].isRequired === true && !envValue) {
              throw new Error(`Required env value missing: ${envName}`);
          }
          if (env[key].isRequired === false && !envValue) {
              continue;
          }
          if (env[key].type === Number || env[key].type == Boolean) {
              pluginEnv[key] = JSON.parse(envValue);
              pluginEnv[key] = env[key].type(pluginEnv[key])
          } else {
              pluginEnv[key] = env[key].type(envValue);
          }
      }
      catch (err) {
          console.error(`Env parsing error: Invalid ${envName}=${envValue} in env. ${err}`);
          throw new Error(`Env parsing error: Invalid ${envName}=${envValue} in env. ${err}`);
      }
    }
    config.env = pluginEnv;
    try{
      await PluginModel.create(config);
    } catch(err){
      console.log(err);
      throw new Error (`Plugin ${name} couldn't be installed`);
    }

    return `Plugin ${name} successfully installed`;
  }

  public getPaymentPluginList(): Partial<PluginConfig>[] {
    return Object.values(this.pluginList['PAYMENT']).map(
      ({ displayData }) => displayData,
    );
  }

  public getOrderHookPluginList(): Partial<PluginConfig>[] {
    return Object.values(this.pluginList['ORDER_HOOK']).map(
      ({ config }) => config,
    );
  }

  public getModulePlugins(): any[] {
    return LoadableModuleList;
  }

  public getPluginInstance(
    extensibleFor: PluginExtinsibleFor,
    pluginName: string,
  ) {
    try {
      if (!this.pluginList[extensibleFor][pluginName]) {
        throw new Error(`${extensibleFor}/${pluginName} Plugin not found`);
      }

      const { plugin, env } = this.pluginList[extensibleFor][pluginName];
      return new plugin(env);
    } catch (err) {
      return null;
    }
  }
}

const pluginManager = PluginManager.getInstance();

export { pluginManager };
