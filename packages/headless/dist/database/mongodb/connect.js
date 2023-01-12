"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const database_1 = require("../../config/database");
const Mongoose = require("mongoose");
async function connect() {
    await Mongoose.connect(database_1.dbConfig.mongodb.URI);
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
exports.connect = connect;
//# sourceMappingURL=connect.js.map