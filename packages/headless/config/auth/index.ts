const { JWT_SECRET_KEY, EXPIRATION_TIME, SALT, AUTH_RESET_ORIGINAL_URL } = process.env;
export const authConfig = {
    salt: parseInt(SALT) || 10,
    expiration_time: EXPIRATION_TIME || '24h',
    jwt_key: JWT_SECRET_KEY || '@BS23@!46',
    originalUrl: AUTH_RESET_ORIGINAL_URL || '/auth/reset/'
}
