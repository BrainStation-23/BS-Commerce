const { JWT_SECRET_KEY, EXPIRATION_TIME, SALT } = process.env;
export const authConfig = {
    salt: parseInt(SALT) || 10,
    expiration_time: EXPIRATION_TIME || '24h',
    jwt_key: JWT_SECRET_KEY || '@BS23@!46',
}
