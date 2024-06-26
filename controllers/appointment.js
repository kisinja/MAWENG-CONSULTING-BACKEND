const Appointment = require('../models/Appointment');
const { sendNotificationEmail } = require('../utils/mailer');

const bookAppointment = async (req, res) => {
    try {
        const newAppointment = await Appointment.create(req.body);
        // Send email notification
        sendNotificationEmail(newAppointment);
        res.status(201).json({ appointment: newAppointment });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ error: 'Error booking appointment' });
    };
};

module.exports = { bookAppointment };