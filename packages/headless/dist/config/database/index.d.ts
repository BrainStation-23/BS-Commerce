import { Dialect } from 'sequelize/types';
export declare const dbConfig: {
    mongodb: {
        URI: string;
    };
    mysql: {
        username: string;
        password: string;
        database: string;
        host: string;
        port: number;
        dialect: Dialect;
    };
    db: string;
};
