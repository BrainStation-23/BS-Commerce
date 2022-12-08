export interface PluginInfo {
    name: string,
    path: string,
    extensibleFor: string,
    version?: string,
    description?: string,
    author?: string,
    isLoadable: boolean
}