const express = require('express');
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.URI

// MIDDLEWARE
app.use(express.json());
app.use('/api/v1/customers', require('./routes/customerRoutes'))
app.use(errorHandler)


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

// mongoose.connect(uri)
// .then(() => {
//     app.listen(port, () => {
//         console.log(`server is running on port ${port}`)
//     })
//     console.log('Connected to MongoDB')
// }).catch((err) => {
//     console.log(err)
// })
