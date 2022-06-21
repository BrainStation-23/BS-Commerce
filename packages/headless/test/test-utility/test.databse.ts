import * as Mongoose from 'mongoose';

export const connectTestDatabase = async (): Promise<void> => {
	const mongoTestUri = 'mongodb://localhost:27017/bs-commerce-test';
	await Mongoose.connect(mongoTestUri);
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
};

export const removeTestCollection = async (collection: string): Promise<void> => {
	await Mongoose.connection.dropCollection(collection);
};
