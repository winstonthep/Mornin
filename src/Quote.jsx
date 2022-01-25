import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = (props) => {
  const [ dayQuote, setDayQuote ] = useState('');
  const [ dayPerson, setDayPerson ] = useState('');

  const retrieveQuote = () => {

    axios.get('/quote')
    .then((response) => {
      setDayQuote(response.data[0].q);
      setDayPerson(response.data[0].a);
      console.log(response);
    })
    .catch((error) => {
      console.error('GET Quote Error:', error)
    })
  }
  useEffect(() => {
    retrieveQuote();
  }, []);
  return (
    <blockquote>&ldquo;{dayQuote}&rdquo; &mdash; <footer>{dayPerson}</footer></blockquote>
  )
}

export default Quote;