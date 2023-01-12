export declare type DB = 'MONGO' | 'MYSQL';
export declare function connectToDatabase(db: DB): Promise<void>;
