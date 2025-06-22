const express = require('express');
const router = express.Router();
const{getRevenueByMonth} = require('../controllers/revenueController')

//Route: GET/api/revenue
router.get('/revenue', getRevenueByMonth);

module.exports = router;