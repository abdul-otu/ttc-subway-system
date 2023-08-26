const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stationSchema = new Schema({
    station_id: {
        type: String,
        required: true
    },
    station_name: {
        type: String
    },
    avail_parking: {
        type: String
    },
    line: {
        type: String
    }
})

module.exports = mongoose.model('Station', stationSchema)