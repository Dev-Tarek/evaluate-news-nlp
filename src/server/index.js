const dotenv = require('dotenv');
const express = require('express')
var cors = require('cors')
const meaningCloudAPI = require('./modules/meaningCloudAPI.js')

dotenv.config();
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(process.env.PORT || 8081, function () {
    console.log('Server started..')
})

app.post('/analyize', function (req, res) {
    meaningCloudAPI.post({
        key: process.env.API_KEY,
        url: req.body.url,
        lang: 'en',
    }).then(result => res.send(result));
})

app.get('/test', function (req, res) {
    res.send("Online");
})
