import express from 'express';
import ShoeController from '../controllers/shoe.js';

const router = express.Router();

router.get('/',  ShoeController.getAllShoeData );
router.get('/category', ShoeController.getCategoryShoe );

export default router;