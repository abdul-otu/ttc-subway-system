require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const trainRoutes = require('./routes/trains')
const stationRoutes = require('./routes/stations')
const trainScheduleRoutes = require('./routes/trainSchedules')
const lineRoutes = require('./routes/lines')
const viewRoutes = require('./routes/views')


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())

// connect to db
mongoose.connect(process.env.DATABASE_URI)
        .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })






app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/trains', trainRoutes)
app.use('/api/stations', stationRoutes)
app.use('/api/trainSchedules', trainScheduleRoutes)
app.use('/api/lines', lineRoutes)
app.use('/api/views', viewRoutes)




