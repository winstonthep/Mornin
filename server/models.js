const db = require('../db/index.js');


module.exports = {
  getNews: function(callback) {
    db.query('select name, url from news', (err, result) => {
      if (err) {
        callback('getNewsError:', err);
      } else {
        callback(undefined, result);
      }
    })
  },
  getGames: function(callback) {
    db.query('select name, url from games', (err, result) => {
      if (err) {
        callback('getGamesError:', err);
      } else {
        callback(undefined, result);
      }
    })
  },
  getCityInfo: function(callback) {
    db.query('select * from cities', (err, result) => {
      if (err) {
        callback('getCitiesError:', err);
      } else {
        callback(undefined, result);
      }
    })
  },
};

