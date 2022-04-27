const { PORT, API } = process.env;
export const coreConfig = {
    port: parseInt(PORT) || 3000,
    api: API || 'GRAPHQL'
}
