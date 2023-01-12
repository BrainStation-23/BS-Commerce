"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const database_1 = require("../../config/database");
const sequelize_typescript_1 = require("sequelize-typescript");
const connect = async () => {
    const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({}, database_1.dbConfig.mysql), { models: [__dirname + '/**/*.model.js'], query: { raw: true } }));
    sequelize
        .authenticate()
        .then(async () => {
        console.log('Mysql Database Connected...');
        try {
            await sequelize.sync();
        }
        catch (error) {
            console.log(error.message);
        }
    })
        .catch((e) => {
        console.log(e.message);
    });
    return sequelize;
};
exports.connect = connect;
//# sourceMappingURL=connect.js.map