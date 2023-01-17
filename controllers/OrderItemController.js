import OrderItemModel from '../models/OrderItemModel.js';
import Product from '../models/ProductModel.js';
import OrderModel from '../models/OrderModel.js';

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
export const getAllOrderItemsByOrder = async (req, res) => {
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

//update amounts
export const updateAmounts = async (req, res) => {
  try {
    const product = await Product.findAll({ where: { idProduct: req.body.idProduct } });
    const newSubtotal = product[0].unitPrice * req.body.quantity;
    const newCityTax = newSubtotal  * 0.1;
    const newCountryTax = (newSubtotal + newCityTax) * 0.05;
    const newStateTax = (newSubtotal + newCityTax + newCountryTax) * 0.08;
    const newFederalTax = (newSubtotal + newCityTax + newCountryTax + newStateTax) * 0.02;
    const newTotalTaxes = newCityTax + newCountryTax + newStateTax + newFederalTax;
    const newTotalAmount = newSubtotal + newTotalTaxes;
    const obj = {
      subtotal: req.body.action === 'Add' ? req.body.subtotal + newSubtotal : (req.body.subtotal - newSubtotal),
      cityTax: req.body.action === 'Add' ? req.body.cityTax + newCityTax : (req.body.cityTax - newCityTax),
      countryTax: req.body.action === 'Add' ? req.body.countryTax + newCountryTax : (req.body.countryTax - newCountryTax),
      stateTax: req.body.action === 'Add' ? req.body.stateTax + newStateTax : (req.body.stateTax - newStateTax),
      federalTax: req.body.action === 'Add' ? req.body.federalTax + newFederalTax : (req.body.federalTax - newFederalTax),
      totalTaxes: req.body.action === 'Add' ? req.body.totalTaxes + newTotalTaxes : (req.body.totalTaxes - newTotalTaxes),
      totalAmount: req.body.action === 'Add' ? req.body.totalAmount + newTotalAmount : (req.body.totalAmount - newTotalAmount),
    }
    await OrderModel.update(obj, { where: { idOrder: req.body.idOrder } });
    res.json({ 'message': 'Order has been updated successfully!.'});
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