const { PORT, API, ENV, HOST, REST_API_PREFIX, BASE_URL, GRAPHQL_PATH_PREFIX } = process.env;

export const coreConfig = {
    port: parseInt(PORT) || 3000,
    api: API || 'REST',
    env: ENV || 'DEVELOPMENT',
    host: HOST || 'localhost',
    restApiPrefix: REST_API_PREFIX || 'api',
    baseUrl: String(BASE_URL) || 'http://localhost:3000',
    graphqlPathPrefix: GRAPHQL_PATH_PREFIX || 'graphql',
}
