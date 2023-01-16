import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('Products', {
  idProduct: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unitPrice: {
    type: DataTypes.DOUBLE(7, 2),
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
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

const OrderItemModel = db.define('OrderItems', {
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

ProductModel.hasMany(OrderItemModel, { foreignKey: 'idProduct'},
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
OrderItemModel.belongsTo(ProductModel, { foreignKey: 'idProduct'},
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default ProductModel;