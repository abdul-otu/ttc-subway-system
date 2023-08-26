const express = require('express')
const {
    createTrain,
    getTrains,
    getATrain,
    deleteTrain,
    updateTrain
} = require('../controller/trainController')

const router = express.Router()

//Getting all trains
router.get('/', getTrains)

//Get a single train
router.get('/:id', getATrain)

//POST a new train
router.post('/', createTrain)

// DELETE a train
router.delete('/:id', deleteTrain)

//UPDATE a train
router.patch('/:id', updateTrain)
module.exports = router
