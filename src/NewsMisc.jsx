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
      <h2 id="newsmischeader">News & Games</h2>
      <div className="newsgames">
        <ul className="news"> <h3>News</h3>
          {newsList.map((news, i) => (
            <li className="links" key={news.name + i}><a className="links" href={news.url}>{news.name}</a></li>
          ))}
        </ul>
        <ul className="games"> <h3>Games</h3>
          {gamesList.map((game, i) => (
            <li className="links" key={game.name + i}><a className="links" href={game.url}>{game.name}</a></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NewsMisc;