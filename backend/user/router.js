const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.get('/count', controller.getUsersCount);

module.exports = router;