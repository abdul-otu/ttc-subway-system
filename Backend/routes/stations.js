const express = require('express')
const {
    createStation,
    getStations,
    getAStation,
    deleteStation,
    updateStation
} = require('../controller/stationController')

const router = express.Router()

//Getting all station
router.get('/', getStations)

//Get a single station
router.get('/:id', getAStation)

//POST a new station
router.post('/', createStation)

// DELETE a station
router.delete('/:id', deleteStation)

//UPDATE a train
router.patch('/:id', updateStation)
module.exports = router
