import { dbConfig } from 'src/config/database';
import { Sequelize } from 'sequelize-typescript';

export const connect = async () => {
  const sequelize: Sequelize = new Sequelize({
    ...dbConfig.mysql,
    models: [__dirname + '/**/*.model.js'],
    query: { raw: true },
  });
  sequelize
    .authenticate()
    .then(async () => {
      console.log('Mysql Database Connected...');
      try {
        await sequelize.sync();
      } catch (error) {
        console.log(error.message);
      }
    })
    .catch((e: any) => {
      console.log(e.message);
    });
  return sequelize;
};
