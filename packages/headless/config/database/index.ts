import { Dialect } from "sequelize/types";

const { DB, MONGODB_URI, MYSQL_DB_HOST, MYSQL_DB_PORT, MYSQL_DB_USER, MYSQL_DB_PASSWORD, MYSQL_DB_DIALECT, MYSQL_DB_NAME } = process.env;

export const dbConfig = {
    mongodb: {
        URI: MONGODB_URI || 'mongodb://localhost:27017/bs-commerce-dev'
    },
    mysql: {
        username: MYSQL_DB_USER! || 'root',
        password: MYSQL_DB_PASSWORD! || '',
        database: MYSQL_DB_NAME! || 'bs-commerce-dev',
        host: MYSQL_DB_HOST! || 'localhost',
        port: parseInt(MYSQL_DB_PORT!) || 3306,
        dialect: MYSQL_DB_DIALECT as Dialect || 'mysql',
    },
    db: DB || 'MYSQL'
}
