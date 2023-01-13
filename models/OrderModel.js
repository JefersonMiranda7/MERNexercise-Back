import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const OrderModel = db.define('Orders', {
  idOrder: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DOUBLE(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  cityTax: {
    type: DataTypes.DOUBLE(7, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  countryTax: {
    type: DataTypes.DOUBLE(7, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  stateTax: {
    type: DataTypes.DOUBLE(7, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  federalTax: {
    type: DataTypes.DOUBLE(7, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  totalTaxes: {
    type: DataTypes.DOUBLE(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  totalAmount: {
    type: DataTypes.DOUBLE(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  }
});

export default OrderModel;