const { CUSTOMER_JWT_SECRET_KEY, CUSTOMER_JWT_EXPIRATION_TIME, CUSTOMER_JWT_SALT, ADMIN_JWT_SECRET_KEY, ADMIN_JWT_EXPIRATION_TIME, ADMIN_JWT_SALT } = process.env;
export const adminAuthConfig = {
    salt: parseInt(CUSTOMER_JWT_SALT) || 10,
    expiration_time: CUSTOMER_JWT_EXPIRATION_TIME || '24h',
    jwt_key: CUSTOMER_JWT_SECRET_KEY || '@CTBS23@!46',
}
export const customerAuthConfig = {
    salt: parseInt(ADMIN_JWT_SALT) || 10,
    expiration_time: ADMIN_JWT_EXPIRATION_TIME || '24h',
    jwt_key: ADMIN_JWT_SECRET_KEY || '@ADBS23@!46',
}
