import OrderItemModel from '../models/OrderItemModel.js';
import Product from '../models/ProductModel.js'

//show all order items
export const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItemModel.findAll({
      include: [{
        model: Product,
        as: 'product'
      }]});
    res.json(orderItems);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//show all order items of one orden
export const getAllOrderItemsByOrden = async (req, res) => {
  try {
    const orderItems = await OrderItemModel.findAll({
      include: [{
        model: Product,
        as: 'product'
      }], where: { idOrder: req.params.id}
      });
    res.json(orderItems);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//show one order item
export const getOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItemModel.findAll({ where: { idOrderItem: req.params.id } });
    res.json(orderItem[0]);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//create one order item
export const createOrderItem = async (req, res) => {
  try {
    await OrderItemModel.create(req.body);
    res.json({ 'message': 'Order item has been created successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}

//update one order item
export const updateOrderItem = async (req, res) => {
  try {
    await OrderItemModel.update(req.body, { where: { idOrderItem: req.params.id } });
    res.json({ 'message': 'Order item has been updated successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}

//delete one order item
export const deleteOrderItem = async (req, res) => {
  try {
    await OrderItemModel.destroy({ where: { idOrderItem: req.params.id } });
    res.json({ 'message': 'Order item has been deleted successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}