const express = require('express');
const asyncHandler = require('express-async-handler');
const { getPayPal } = require('./paypal.controller');

const router = express.Router();

// @desc Get paypal client id
// @route GET /api/config/paypal
// @access Private
router.get('/paypal', asyncHandler(getPayPal));

module.exports = router;
