import { Dialect } from 'sequelize/types';

const {
  DB,
  MONGODB_URI_DEV,
  MONGODB_URI_PROD,
  MONGODB_URI_TEST,
  MYSQL_DB_HOST,
  MYSQL_DB_PORT,
  MYSQL_DB_USER,
  MYSQL_DB_PASSWORD,
  MYSQL_DB_DIALECT,
  MYSQL_DB_NAME,
} = process.env;
export const dbConfig = {
  mongodb: {
    PROD_URI: MONGODB_URI_PROD! || 'mongodb://localhost:27017/bs-commerce-prod',
    DEV_URI: MONGODB_URI_DEV! || 'mongodb://localhost:27017/bs-commerce-dev',
    TEST_URI: MONGODB_URI_TEST! || 'mongodb://localhost:27017/bs-commerce-test',
  },
  mysql: {
    username: MYSQL_DB_USER! || 'root',
    password: MYSQL_DB_PASSWORD! || '1234',
    database: MYSQL_DB_NAME! || 'bs-commerce-dev',
    host: MYSQL_DB_HOST! || 'localhost',
    port: parseInt(MYSQL_DB_PORT!) || 3306,
    dialect: (MYSQL_DB_DIALECT as Dialect) || 'mysql',
  },
  db: DB || 'MONGO',
};
