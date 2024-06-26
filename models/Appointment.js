const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    service: String,
    date: Date,
    time: String,
    fullName: String,
    email: String,
    phone: String,
    message: String
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);