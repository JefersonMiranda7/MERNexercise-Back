import OrderModel from '../models/OrderModel.js';

//show all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.findAll();
    res.json(orders);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//show one order
export const getOrder = async (req, res) => {
  try {
    const order = await OrderModel.findAll({ where: { idOrder: req.params.id } });
    res.json(order[0]);
  } catch (e) {
    res.json({ message: e.message })
  }
}

//create one order
export const createOrder = async (req, res) => {
  try {
    await OrderModel.create(req.body);
    res.json({ 'message': 'Order has been created successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}

//update one order
export const updateOrder = async (req, res) => {
  try {
    await OrderModel.update(req.body, { where: { idOrder: req.params.id } });
    res.json({ 'message': 'Order has been updated successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}

//delete one order
export const deleteOrder = async (req, res) => {
  try {
    await OrderModel.destroy({ where: { idOrder: req.params.id } });
    res.json({ 'message': 'Order has been deleted successfully!.'});
  } catch (e) {
    res.json({ message: e.message })
  }
}