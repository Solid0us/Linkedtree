const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router.route('/:id')
.get(userController.getUser)
.delete(userController.deleteUser)
.patch(userController.updateUser);

module.exports = router;