const express = require('express');
const { bookAppointment } = require('../controllers/appointment');

const router = express.Router();

router.post('/book-appointment', bookAppointment);

module.exports = router;