import db from '../database/db.js';
import OrderModel from './OrderModel.js';
import ProductModel from './ProductModel.js';
import { BelongsTo, DataTypes, HasOne } from 'sequelize';

const OrderModelItem = db.define('OrderItems', {
  idOrderItem: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  }}, 
  // BelongsTo(db.OrderModel, { foreignKey: 'idOrder', as: 'order' }),
  // HasOne(db.ProductModel, { foreignKey: 'idProduct', as: 'product' }),
);

export default OrderModelItem;