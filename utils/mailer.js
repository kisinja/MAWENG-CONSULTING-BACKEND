const nodemailer = require('nodemailer');

const sendNotificationEmail = (appointment) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: 'New Appointment Booked (MAWENG CONSULTING LIMITED)',
        text: `
            A new appointment has been booked with the following details:
            Service: ${appointment.service}
            Date: ${appointment.date}
            Time: ${appointment.time}
            Name: ${appointment.fullName}
            Email: ${appointment.email}
            Phone: ${appointment.phone}
            Message: ${appointment.message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendNotificationEmail };