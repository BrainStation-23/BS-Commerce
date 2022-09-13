import * as Mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const dbConfig = {
  mongodb: {
    URI: MONGODB_URI! || 'mongodb://localhost:27017/bs-commerce-dev',
  },
};

export async function connectToDatabase() {
  await Mongoose.connect(dbConfig.mongodb.URI!);
  const { connection } = Mongoose;

  connection.on('connected', () => {
    console.info('Success! Connected to MongoDB.');
  });

  connection.on('disconnected', () => {
    console.error('!!!!!!!!!! MongoDB Disconnected !!!!!!!!!!');
  });

  connection.on('reconnected', () => {
    console.warn('!!!!!!!!!! MongoDB Reconnected  !!!!!!!!!!');
  });

  connection.on('error', (error) => {
    console.error('Failed! MongoDB connection failed. \n', error);
  });
}
