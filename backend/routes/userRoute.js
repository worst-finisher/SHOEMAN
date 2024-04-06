import express from 'express';
import UserController from '../controllers/user.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/create',[ body('email','Invalid email ').isEmail(),
                        body('name','Invalid Name').isLength({ min: 3 }), 
                        body('password', 'Incorrect Password').isLength({ min: 5 }) ], UserController.createUser );

router.post('/verify',[ body('email','Invalid email ').isEmail(),
                        body('password', 'Incorrect Password').isLength({ min: 5 }) ], UserController.validateUser );

export default router;