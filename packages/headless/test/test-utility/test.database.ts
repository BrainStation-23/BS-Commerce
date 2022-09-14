import * as Mongoose from 'mongoose';
import { adminData, customerData, productData } from './predefined.data';

export const connectTestDatabase = async (): Promise<void> => {
  const mongoTestUri = 'mongodb://localhost:27017/bs-commerce-test';
  await Mongoose.connect(mongoTestUri);
  const { connection } = Mongoose;

  connection.on('connected', async () => {
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

export const removeTestCollection = async (
  collection: string,
): Promise<void> => {
  await Mongoose.connection.dropCollection(collection);
};

export const insertCustomers = async (): Promise<void> => {
  try {
    const CustomerModel = Mongoose.connection.db.collection('customers');
    const doesCustomerExist = await CustomerModel.findOne({
      email: customerData.email,
    });
    if (!doesCustomerExist) await CustomerModel.insertOne(customerData);
  } catch (error) {
    console.log(error);
  }
};

export const insertAdmins = async (): Promise<void> => {
  try {
    const AdminModel = Mongoose.connection.db.collection('users');
    const doesCustomerExist = await AdminModel.findOne({
      email: adminData.email,
    });
    if (!doesCustomerExist) await AdminModel.insertOne(adminData);
  } catch (error) {
    console.log(error);
  }
};

export const insertProducts = async (): Promise<void> => {
  try {
    const ProductModel = Mongoose.connection.db.collection('products');
    const doesProductExist =
      (await ProductModel.findOne({ 'info.sku': productData.info.sku })) ||
      (await ProductModel.findOne({
        'meta.friendlyPageName': productData.meta.friendlyPageName,
      }));
    if (!doesProductExist) await ProductModel.insertOne(productData);
  } catch (error) {
    console.log(error);
  }
};

export const insertCollections = async (): Promise<void> => {
  try {
    await insertAdmins();
    await insertCustomers();
    await insertProducts();
  } catch (error) {
    console.log(error);
  }
};
