const TrainSchedule = require('../models/trainScheduleModel')
const mongoose = require('mongoose')

// get all train Schedule
const getTrainSchedules = async (req, res) => {
    const trainSchedule = await TrainSchedule.find({})

    res.status(200).json(trainSchedule)
}
// get a single train schedule
const getATrainSchedule = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such train Schedule'})
    }
    
    const trainSchedule = await TrainSchedule.findById(id)

    if(!trainSchedule) {
        return res.status(404).json({error: 'No such train Schedule'})
    }

    res.status(200).json(trainSchedule)
}


//create new train schedule
const createTrainSchedule = async (req, res) => {
    const {train_schedule_id, train_id, start_time, remaining_capacity} = req.body

    // add doc to db
    try {
        const trainSchedule = await TrainSchedule.create({train_schedule_id, train_id, start_time, remaining_capacity})
        res.status(200).json(trainSchedule)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a train schedule
const deleteTrainSchedule = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such train schedule'})
    }

    const trainSchedule = await TrainSchedule.findOneAndDelete({_id: id})

    if(!trainSchedule) {
        return res.status(400).json({error: 'No such train schedule'})
    }

    res.status(200).json(trainSchedule)

}
//update a train
const updateTrainSchedule = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Train Schedule'})
    }

    const trainSchedule = await TrainSchedule.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!trainSchedule) {
        return res.status(400).json({error: 'No such train Schedule'})
    }
    
    res.status(200).json(trainSchedule)
}

module.exports = {
    createTrainSchedule,
    getTrainSchedules,
    getATrainSchedule,
    deleteTrainSchedule,
    updateTrainSchedule
}