const axios = require('axios');

const quoteHelper = (callback) => {
  let options = {
    url: 'https://zenquotes.io/api/today',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  axios.get( options.url, options.headers)
    .then((response) => {
      callback(undefined, response);
    })
    .catch((error) => {
      callback(error);
    })
};

const weatherRetriever = (latitude, longitude, callback) => {
  let options = {
    url: `https://api.weather.gov/points/${latitude},${longitude}`,
    headers: {
      'User-Agent': 'winstonspantelakos@gmail.com'
    }
  };
  console.log('OPTIONS URL:', options.url);
    axios.get( options.url, options.headers)
    .then((response) => {
      // callback(undefined, response.data.properties.forecast);
      forecastRetriever(response.data.properties.forecast, callback)
    })
    .catch((error) => {
      console.log('GET WEATHER Error:', error);
      callback(error);
    })
}

const forecastRetriever = (url, callback) => {
  let options = {
    url: url,
    headers: {
      'User-Agent': 'winstonspantelakos@gmail.com'
    }
  };
    axios.get( options.url, options.headers)
    .then((response) => {
      console.log(response.data.properties.periods);
      callback(undefined, response.data.properties.periods);
    })
    .catch((error) => {
      console.log('GET Forecast Error:', error);
      callback(error);
    })
}

module.exports = { quoteHelper, weatherRetriever };