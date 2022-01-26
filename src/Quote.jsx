import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [ dayQuote, setDayQuote ] = useState('');
  const [ dayPerson, setDayPerson ] = useState('');

  const retrieveQuote = () => {

    axios.get('/quote')
    .then((response) => {
      setDayQuote(response.data[0].q);
      setDayPerson(response.data[0].a);
    })
    .catch((error) => {
      console.error('GET Quote Error:', error)
    })
  }
  useEffect(() => {
    retrieveQuote();
  }, []);

  return (
   <h2><blockquote>&ldquo;{dayQuote}&rdquo; <footer><br></br>&mdash;  {dayPerson}</footer></blockquote></h2>
  )
}

export default Quote;