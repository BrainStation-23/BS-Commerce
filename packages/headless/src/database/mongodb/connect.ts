import { dbConfig } from 'config/database';
import * as Mongoose from 'mongoose';
import { EnvType } from '../database.init';

const resolveMongoURI = (env: EnvType): string => {
	switch (env) {
		case 'DEV':
			return dbConfig.mongodb.DEV_URI;
		case 'TEST':
			return dbConfig.mongodb.TEST_URI;
		case 'PROD':
			return dbConfig.mongodb.PROD_URI;
	}
};

export async function connect(env: EnvType) {
	await Mongoose.connect(resolveMongoURI(env));
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
