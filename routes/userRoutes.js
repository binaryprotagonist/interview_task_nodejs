const express = require('express');
const { remove, updateEmail, updatePassword, updateName } = require('../controller/userController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Protected routes - require authentication
router.delete('/', authenticate, remove);
router.patch('/email', authenticate, updateEmail);
router.patch('/password', authenticate, updatePassword);
router.patch('/name', authenticate, updateName);

module.exports = router;
