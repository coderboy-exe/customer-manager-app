const express = require('express');
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.json());
app.use('/api/v1/customers', require('./routes/customerRoutes'))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

// mongoose.connect('mongodb+srv://admin:admin@cluster0.iy7no9q.mongodb.net/flows-backend')
// .then(() => {
//     app.listen(port, () => {
//         console.log(`server is running on port ${port}`)
//     })
//     console.log('Connected to MongoDB')
// }).catch((err) => {
//     console.log(err)
// })
