const Appointment = require('../models/Appointment');
const { sendNotificationEmail } = require('../utils/mailer');

const bookAppointment = async (req, res) => {

    if (!req.body.service || !req.body.date || !req.body.time || !req.body.fullName || !req.body.email || !req.body.phone || !req.body.message) {
        return res.status(400).json({ error: 'All fields are required' });
    };

    try {
        const newAppointment = await Appointment.create(req.body);
        // Send email notification
        sendNotificationEmail(newAppointment);
        res.status(201).json({ message: "Appointment Booked Successfully !!" });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ error: 'Error booking appointment' });
    };
};

module.exports = { bookAppointment };