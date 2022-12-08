import { NewModulePluginConfig } from "src/plugin-system/types/new_module/config.type";

export const config: NewModulePluginConfig = {
    name: "demo",
    path: 'demo',
    extensibleFor: "NEW_MODULE",
    version: "1.0.0",
    description: "Demo plugin as new module for bs commerce",
    author: "Anjar",
    isLoadable: true,
    env: {}
}
