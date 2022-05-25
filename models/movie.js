const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

        title: {
            type: String,
            required: true
        },

        rated: {
            type: String,
            required: true
        }

    }, {
        timestamps: true
    }

);

module.exports = mongoose.model('Movie', movieSchema);