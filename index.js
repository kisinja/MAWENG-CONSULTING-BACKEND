require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('common'));

const appointmentRoutes = require('./routes/appointment');

app.use('/', appointmentRoutes);

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log('Connected to MongoDB');
            });
    } catch (error) {
        console.log(error.messsage);
    }
};

const start_server = async () => {
    try {
        await connectDb();
        app.listen(port, (req, res) => {
            console.log(`Server started on port ${port}`)
        })
    } catch (error) {
        console.log(error.message);
    }
};

start_server();

app.get('/api', (req, res) => {
    res.send('Welcome to the official MAWENG CONSULTING LIMITED API !!');
});