const Line = require('../models/lineModel')
const mongoose = require('mongoose')

// get all train
const getLines = async (req, res) => {
    const line = await Line.find({}).sort({createdAt: -1})

    res.status(200).json(line)
}
// get a single train
const getALine = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Line'})
    }
    
    const line = await Line.findById(id)

    if(!line) {
        return res.status(404).json({error: 'No such line'})
    }

    res.status(200).json(line)
}


//create new train
const createLine = async (req, res) => {
    const {line_id, Line_name} = req.body

    // add doc to db
    try {
        const line = await Line.create({line_id, Line_name})
        res.status(200).json(line)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a train
const deleteLine = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such line'})
    }

    const line = await Line.findOneAndDelete({_id: id})

    if(!line) {
        return res.status(400).json({error: 'No such line'})
    }

    res.status(200).json(line)

}
//update a train
const updateLine = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Line'})
    }

    const line = await Line.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!line) {
        return res.status(400).json({error: 'No such Line'})
    }
    
    res.status(200).json(line)
}

module.exports = {
    createLine,
    getLines,
    getALine,
    deleteLine,
    updateLine
}