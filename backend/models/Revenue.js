const mongoose = require('mongoose');

// define the schema
const RevenueSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    revenue:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    }
});

// Export the model
module.exports = mongoose.model('Revenue', RevenueSchema);