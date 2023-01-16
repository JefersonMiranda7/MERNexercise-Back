import db from '../database/db.js';
import OrderItemModel from './OrderItemModel.js';
import { DataTypes, HasMany } from 'sequelize';

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
  }},
);

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
  }}
);

OrderModel.hasMany(OrderModelItem, { foreignKey: 'idOrder', as: 'items' },
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
OrderModelItem.belongsTo(OrderModel, { foreignKey: 'idOrder' },
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderModel;