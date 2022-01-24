const logger = require('../logger/index');
const path = require('path')
const express = require('express')
const app = express()
const port = 3070

app.use(express.json())

const pathName = path.join(__dirname + '/../dist')

app.use('/', express.static(pathName))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Here live on port ${port}`)
})

