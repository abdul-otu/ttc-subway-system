const express = require('express')
const {
    viewOne,
    viewTwo,
    viewThree,
    viewFour,
    viewFive,
    viewSix,
    viewSeven,
    viewEight,
    viewNine,
    viewTen,
} = require('../controller/viewsController')

const router = express.Router()

router.get('/viewone', viewOne)

router.get('/viewtwo', viewTwo)

router.get('/viewthree', viewThree)

router.get('/viewfour', viewFour)

router.get('/viewfive', viewFive)

router.get('/viewsix', viewSix)

router.get('/viewseven', viewSeven)

router.get('/vieweight', viewEight)

router.get('/viewnine', viewNine)

router.get('/viewten', viewTen)

module.exports = router