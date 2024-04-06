import express from 'express';
import OrderDataController from '../controllers/orderData.js';

const router = express.Router();

router.post('/save', OrderDataController.saveData );
router.post('/user', OrderDataController.getUserData );

export default router;