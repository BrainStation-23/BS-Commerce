const { PORT, API, ENV, HOST, REST_API_PREFIX } = process.env;
export const coreConfig = {
	port: parseInt(PORT) || 3000,
	api: API || 'REST',
	env: ENV || 'DEVELOPMENT',
	host: HOST || 'localhost',
	restApiPrefix: REST_API_PREFIX || 'api',
};
