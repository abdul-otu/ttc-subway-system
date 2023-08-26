const Train = require('../models/trainModel')
const mongoose = require('mongoose')

// get all train
const getTrains = async (req, res) => {
    const train = await Train.find({}).sort({createdAt: -1})

    res.status(200).json(train)
}
// get a single train
const getATrain = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such train'})
    }
    
    const train = await Train.findById(id)

    if(!train) {
        return res.status(404).json({error: 'No such train'})
    }

    res.status(200).json(train)
}


//create new train
const createTrain = async (req, res) => {
    const {id, final_dest, starting_dest, capacity, line_num} = req.body

    // add doc to db
    try {
        const train = await Train.create({id, final_dest, starting_dest, capacity, line_num})
        res.status(200).json(train)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a train
const deleteTrain = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such train'})
    }

    const train = await Train.findOneAndDelete({_id: id})

    if(!train) {
        return res.status(400).json({error: 'No such train'})
    }

    res.status(200).json(train)

}
//update a train
const updateTrain = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Train'})
    }

    const train = await Train.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!train) {
        return res.status(400).json({error: 'No such train'})
    }
    
    res.status(200).json(train)
}

module.exports = {
    createTrain,
    getTrains,
    getATrain,
    deleteTrain,
    updateTrain
}