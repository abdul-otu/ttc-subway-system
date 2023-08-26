const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trainSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    final_dest: {
        type: String
    },
    starting_dest: {
        type: String
    },
    capacity: {
        type: String
    },
    line_num: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Train', trainSchema)