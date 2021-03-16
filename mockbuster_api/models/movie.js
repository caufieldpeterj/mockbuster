const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String},
    year: {type: Number},
    platform: {type: String},
    description: {type: String},
    image: {type: String}
})

module.exports = mongoose.model('Movies', movieSchema);