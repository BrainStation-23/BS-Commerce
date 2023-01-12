"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const connect_1 = require("./mongodb/connect");
const connect_2 = require("./mysql/connect");
async function connectToDatabase(db) {
    try {
        switch (db) {
            case 'MONGO':
                await (0, connect_1.connect)();
                break;
            case 'MYSQL':
                await (0, connect_2.connect)();
                break;
            default:
                throw new Error('No database found to connect');
        }
    }
    catch (err) {
        console.error('Error connecting to database');
    }
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=database.init.js.map