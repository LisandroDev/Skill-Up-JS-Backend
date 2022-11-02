const express = require('express')
const userController = require('../controllers/users')

const router = express.Router()

router.get('/', userController.get);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.get('/:id', userController.getUser)

module.exports = router