const express = require('express')
const {
    createLine,
    getLines,
    getALine,
    deleteLine,
    updateLine
} = require('../controller/lineController')

const router = express.Router()

//Getting all trains
router.get('/', getLines)

//Get a single train
router.get('/:id', getALine)

//POST a new train
router.post('/', createLine)

// DELETE a train
router.delete('/:id', deleteLine)

//UPDATE a train
router.patch('/:id', updateLine)
module.exports = router
