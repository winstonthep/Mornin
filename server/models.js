const db = require('../db/index.js');


module.exports = {
  getNews: function(callback) {
    db.query('select name, url from news', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, result);
      }
    })
  },
  getGames: function(callback) {
    db.query('select name, url from games', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, result);
      }
    })
  },
  getCityInfo: function(callback) {
    db.query('select * from cities', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, result);
      }
    })
  },
  getTodos: function(callback) {
    db.query('select * from todos', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, result);
      }
    })
  },
  addTodo: function(username, newTodo, callback) {
    db.query(`INSERT INTO todos(username, note, done) VALUES('${username}', '${newTodo}', false)`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, result);
      }
    })
  },
  updateTodo: function(todoId, callback) {
    db.query(`UPDATE todos SET done = true WHERE id=${todoId}`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, result);
      }
    })
  }
};

