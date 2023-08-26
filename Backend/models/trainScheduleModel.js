const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trainScheduleSchema = new Schema({
    train_schedule_id: {
        type: String,
        required: true
    },
    train_id: {
        type: String
    },
    start_time: {
        type: String
    },
    remaining_capacity: {
        type: String
    }
})

module.exports = mongoose.model('TrainSchedule', trainScheduleSchema)