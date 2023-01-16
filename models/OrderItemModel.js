import db from '../database/db.js';
import { BelongsTo, DataTypes, HasOne } from 'sequelize';

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

OrderItemModel.belongsTo(OrderModel, { foreignKey: 'idOrder'},
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
OrderModel.hasMany(OrderItemModel, { foreignKey: 'idOrder', as: 'items' },
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

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

OrderItemModel.belongsTo(ProductModel, { foreignKey: 'idProduct', as: 'product'},
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
ProductModel.hasMany(OrderItemModel, { foreignKey: 'idProduct'},
{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderItemModel;