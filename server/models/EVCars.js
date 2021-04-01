const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    model: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    year: {
        type: Number,
        require: true,
    },
    carImage: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Cars", CarSchema)