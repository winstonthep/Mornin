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
      console.log(response);
      callback(undefined, response);
    })
    .catch((error) => {
      callback('GET Quote Error: ', error);
    })
};

module.exports = quoteHelper;