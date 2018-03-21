const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// create cities Schema & model
const CitiesSchema = new Schema({
    country: {
        type: String,
        required: [true, 'Country field is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    population: {
        type: Number,
        required: [true, 'Population field is required']
    },
    timeZone: {
        type: String,
        required: [true, 'timeZone field is required']
    },
    location: GeoSchema
});

const Cities = mongoose.model('cities', CitiesSchema);

module.exports = Cities;