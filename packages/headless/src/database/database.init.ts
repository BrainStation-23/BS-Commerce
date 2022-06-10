import { connect as connectToMongoDB } from './mongodb/connect';
import { connect as connectToMySql } from './mysql/connect';

export type EnvType = 'DEV' | 'TEST' | 'PROD';
type DB = 'MONGO' | 'MYSQL';
export async function connectToDatabase(db: DB, env: EnvType) {
  try {
    switch (db) {
      case 'MONGO':
        await connectToMongoDB(env);
        break;
      case 'MYSQL':
        await connectToMySql();
        break;
      default:
        throw new Error('No database found to connect');
    }
  } catch (err) {
    console.log(err);
    console.error('Error connecting to database');
  }
}
