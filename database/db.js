import { Sequelize } from 'sequelize';

const db = new Sequelize (
  'mydb',
  'root',
  'root',
  {
  host: 'localhost',
  dialect: 'mysql'
  }
);

export default db;