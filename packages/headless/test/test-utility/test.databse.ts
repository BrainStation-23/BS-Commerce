import mongoose from 'mongoose';
import { dbConfig } from 'config/database';
import { connectToDatabase } from 'src/database/database.init';

export const connectTestDatabase = async (): Promise<void> => {
  type DB = 'MONGO' | 'MYSQL';
  await connectToDatabase(dbConfig.db as DB, 'TEST');
};

export const removeTestCollection = async (
  collection: string,
): Promise<void> => {
  await mongoose.connection.dropCollection(collection);
};
