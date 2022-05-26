import { dbConfig } from 'config/database';
import { Sequelize } from 'sequelize-typescript';
import BrandModel from './brand/brand.model';
import InfoModel from './brand/info.model';
import Info from './brand/info.model';
import MetaModel from './brand/meta.model';

export const connect = async () => {
    const sequelize = new Sequelize({
        host: 'localhost',
        dialect: 'mysql',
        username: 'root',
        password: '',
        database: 'bs-commerce-dev',
        port:3306,
        models: [BrandModel, InfoModel, MetaModel],
        // query: { raw: true }
    });
   
    sequelize
    .authenticate()
    .then(async () => {
        console.log('Connection has been established successfully.');
        try {
            await sequelize.sync();
        } catch (error) {
            
            console.log(error.message);
            console.log(error)
        }
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
    return sequelize;
};