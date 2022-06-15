import { dbConfig } from 'config/database';
import * as Mongoose from 'mongoose';

export async function connect() {
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
