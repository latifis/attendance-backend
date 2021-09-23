import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/user', userController.profile);
router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);
router.get('/checkin', userController.checkOut);
router.get('/checkout', userController.checkIn);
router.get('/user/:userId/location', userController.location)


module.exports = router;
