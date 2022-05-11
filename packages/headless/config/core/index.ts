const { PORT, API, ENV, HOST, APP_PREFIX } = process.env;
export const coreConfig = {
    port: parseInt(PORT) || 3000,
    api: API || 'REST',
    env: ENV || 'DEVELOPMENT',
    host: HOST || 'localhost',
    appPrefix: APP_PREFIX || 'api'
}
