const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

const { ROLLBARTOKEN, PORT } = process.env

app.use(express.json())
app.use(cors())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: ROLLBARTOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})
// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/chicken', (req, res) => {
    try {
        chicken()
    }
    catch (error) {
        rollbar.error(error)
    }
    res.send('hey')
})

app.get('/dontPress', (req,res) => {
    console.log('pressed it')
    res.send('pressed it')
})

app.listen(PORT, () => {
    `Server listening on port ${PORT}`
})