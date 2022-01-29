import React, { useState, useEffect } from 'react';
import CityDropdown from './CityDropdown.jsx';
import WeatherBreakdown from './WeatherBreakdown.jsx';
import axios from 'axios';

const Weather = ( {capture} ) => {
  const [ cityList, setCityList ] = useState([{id: 1, city: 'Raleigh', state: 'NC', latitude: '35.77960', longitude: '-78.63820'}]);
  const [ selectedCity, setSelectedCity ] = useState(1);
  const [ selectedForecast, setSelectedForecast] = useState([]);

  const retrieveCities = () => {
    axios.get('/cities')
    .then((response) => {
      setCityList(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error('GET Cities Error:', error)
    })
  };

  const handleChange = (e) => {
    let newCity = e.target.value;
    let changeWeather = () => {
      return new Promise(function (resolve, reject) {
        setSelectedCity(newCity, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    changeWeather()
      .then(function (result) {
        retrieveWeather();
      })
      .catch(function (error) {
        console.log("Change Weather Error:", error);
      });
  }
  const retrieveWeather = () => {
    console.log(cityList[selectedCity - 1]);
    let params = {
      params:{
        latitude: cityList[selectedCity - 1]['latitude'],
        longitude: cityList[selectedCity - 1]['longitude']
      }
    }
    axios.get('/weather', params)
      .then((response) => {
        console.log(response.data)
        setSelectedForecast(response.data.slice(0, 2))
        capture(response.data[0]);
      })
      .catch((error) => {
        console.error('Weather Retrieval Error:', error);
      });
  }
  useEffect(() => {
    retrieveCities();
    retrieveWeather();
  }, [selectedCity]);

  return (
    <>
      <h2 id="weatherheader">Today's Weather</h2>
      <div className="dropdown">
        <CityDropdown selectedCity={selectedCity} cities={cityList} change={handleChange}/>
      </div>
      <div className="breakdown">
        <WeatherBreakdown today={selectedForecast[0]} tonight={selectedForecast[1]}/>
      </div>
    </>
  )
}

export default Weather;