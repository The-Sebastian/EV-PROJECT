const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    model: {
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
    },
    price: {
        type: String,
        require: false
    },
    maxRange: {
        type: String,
        require: false
    },
    maxHorsePower:{
        type: String,
        require: false
    },
    passengers:{
        type: Number,
        require: false
    },
    fullCharge: {
        type: String,
        require: false
    },
    zeroToSix: {
        type: String,
        require: false
    },
    Dimensions: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model("Cars", CarSchema)