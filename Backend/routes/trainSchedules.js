const express = require('express')
const {
    createTrainSchedule,
    getTrainSchedules,
    getATrainSchedule,
    deleteTrainSchedule,
    updateTrainSchedule
} = require('../controller/trainScheduleController')

const router = express.Router()

//Getting all trains
router.get('/', getTrainSchedules)

//Get a single train
router.get('/:id', getATrainSchedule)

//POST a new train
router.post('/', createTrainSchedule)

// DELETE a train
router.delete('/:id', deleteTrainSchedule)

//UPDATE a train
router.patch('/:id', updateTrainSchedule)
module.exports = router
