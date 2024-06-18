const express = require('express');
const {getUsers, createUser, updateUser,deleteUser} = require('../controllers/user.controler');

const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
router.patch('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;