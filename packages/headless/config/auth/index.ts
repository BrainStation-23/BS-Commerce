const { JWT_SECRET_KEY, JWT_EXPIRATION_TIME, JWT_SALT } = process.env;
export const authConfig = {
    salt: parseInt(JWT_SALT) || 10,
    expiration_time: JWT_EXPIRATION_TIME || '10d',
    jwt_key: JWT_SECRET_KEY || '@CTBS23@!46',
    customerCookiesMaxAge: 60 * 60 * 24 * 10,
}
