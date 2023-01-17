import express from 'express';
import { getAllOrderItems, getAllOrderItemsByOrder, getOrderItem, createOrderItem, updateOrderItem, updateAmounts, deleteOrderItem } from '../controllers/OrderItemController.js';
const router = express.Router();

//order item routes
router.get('/', getAllOrderItems);
router.get('/:id', getAllOrderItemsByOrder);
router.get('/:id', getOrderItem);
router.post('/', createOrderItem);
router.put('/:id', updateOrderItem);
router.post('/amounts', updateAmounts);
router.delete('/:id', deleteOrderItem);

export default router;