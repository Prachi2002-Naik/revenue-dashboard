const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const revenueRoutes = require('./routes/revenueRoutes');

//load environment variables
dotenv.config();

//connect to MongoDB
connectDB();

// create express app
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

//Routes
app.use('/api', revenueRoutes);

// start server
const PORT = process.env.PORT || 5000;
// app.get('/',(req, res)=>{
//     res.send('API is running..');
// });
app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})