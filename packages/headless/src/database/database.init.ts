import { connect as connectToMongoDB } from "./mongodb/connect";
import { connect as connectToMySql } from "./mysql/connect";

type DB = 'MONGO' | 'MYSQL';
export async function connectToDatabase(db: DB) {
    try {
        switch (db) {
            case 'MONGO':
                await connectToMongoDB();
                break;
            case 'MYSQL':
                await connectToMySql();
                break;
            default:
                throw new Error('No database found to connect');
        }
    }
    catch (err) {
        console.error('Error connecting to database');
    }
}