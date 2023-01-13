import express from 'express';
import { getAllOrderItems, getOrderItem, createOrderItem, updateOrderItem, deleteOrderItem } from '../controllers/OrderItemController.js';
const router = express.Router();

//order item routes
router.get('/', getAllOrderItems);
router.get('/:id', getOrderItem);
router.post('/', createOrderItem);
router.put('/:id', updateOrderItem);
router.delete('/:id', deleteOrderItem);

export default router;