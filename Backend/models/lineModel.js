const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lineSchema = new Schema({
    line_id: {
        type: String,
        required: true
    },
    Line_name: {
        type: String
    }
})

module.exports = mongoose.model('Line', lineSchema)