import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsMisc = () => {
  const [ newsList, setNewsList ] = useState([]);
  const [ gamesList, setGamesList] = useState([]);

  const retrieveNews = () => {
    axios.get('/news')
    .then((response) => {
      setNewsList(response.data);
    })
    .catch((error) => {
      console.error('GET News Error:', error)
    })
  };
  const retrieveGames = () => {
    axios.get('/games')
    .then((response) => {
      setGamesList(response.data);
    })
    .catch((error) => {
      console.error('GET Games Error:', error)
    })
  };
  useEffect(() => {
    retrieveNews();
    retrieveGames();
  }, []);

  return (
    <>
      <ul> News
        {newsList.map((news, i) => (
          <li key={news.name + i}><a href={news.url}>{news.name}</a></li>
        ))}
      </ul>
      <ul> Games
        {gamesList.map((game, i) => (
          <li key={game.name + i}><a href={game.url}>{game.name}</a></li>
        ))}
      </ul>
    </>
  )
}

export default NewsMisc;