const logger = require('../logger/index');
const path = require('path')
const express = require('express')
const app = express()
const port = 3070
const { quoteHelper, weatherRetriever }  = require('./helpers.js');
const { getNews, getGames, getCityInfo } = require('./models.js');

let cors = require('cors')
app.use(cors());

app.use(express.json())

const pathName = path.join(__dirname + '/../dist')

app.use('/', express.static(pathName))

app.get('/quote', (req, res) => {
  quoteHelper((err, result) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(result.data);
    }
  });
})

app.get('/news', (req, res) => {
  getNews((err, result) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
})

app.get('/games', (req, res) => {
  getGames((err, result) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
})

app.get('/weather', (req, res) => {
  weatherRetriever(req.query.latitude, req.query.longitude,(err, result) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
})

app.get('/cities', (req, res) => {
  getCityInfo((err, result) => {
    if (err) {
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
})

app.listen(port, () => {
  console.log(`Here live on port ${port}`)
})

