const Station = require('../models/stationModel')
const mongoose = require('mongoose')

// get all station
const getStations = async (req, res) => {
    const station = await Station.find({})

    res.status(200).json(station)
}
// get a single station
const getAStation = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such station'})
    }
    
    const station = await Station.findById(id)

    if(!station) {
        return res.status(404).json({error: 'No such station'})
    }

    res.status(200).json(station)
}


//create new station
const createStation = async (req, res) => {
    const {station_id, station_name, avail_parking, line} = req.body

    // add doc to db
    try {
        const station = await Station.create({station_id, station_name, avail_parking, line})
        res.status(200).json(station)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a station
const deleteStation = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such station'})
    }

    const station = await Station.findOneAndDelete({_id: id})

    if(!station) {
        return res.status(400).json({error: 'No such station'})
    }

    res.status(200).json(station)

}
//update a Station
const updateStation = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Station'})
    }

    const station = await Station.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!station) {
        return res.status(400).json({error: 'No such station'})
    }
    
    res.status(200).json(station)
}

module.exports = {
    createStation,
    getStations,
    getAStation,
    deleteStation,
    updateStation
}