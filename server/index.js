const logger = require('../logger/index');
const path = require('path')
const express = require('express')
const app = express()
const port = 3070
const quoteHelper = require('./quoteHelper.js');


let cors = require('cors')
app.use(cors());

app.use(express.json())

const pathName = path.join(__dirname + '/../dist')

app.use('/', express.static(pathName))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/quote', (req, res) => {
  quoteHelper((err, result) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(result.data);
    }
  })

})

app.listen(port, () => {
  console.log(`Here live on port ${port}`)
})

