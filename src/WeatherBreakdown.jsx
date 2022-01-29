import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherBreakdown = ({today, tonight}) => {
  console.log(today);
  console.log(tonight);
  if (today !== undefined && tonight !== undefined) {

    return (
      <>
        <div className="today"><strong>Currently</strong><br></br><br></br>
          <img className="todayimage" src={today.icon}></img><br></br>
          <br></br><div>{today.shortForecast}</div>
          <div>Temp: {today.temperature}&#176;F</div>
          <div>Wind Speed: {today.windSpeed}</div>
          <div>Wind Direction: {today.windDirection}</div>
        </div>
        <div className="today"><strong>Later</strong><br></br><br></br>
          <img className="todayimage" src={tonight.icon}></img><br></br>
          <br></br><div>{tonight.shortForecast}</div>
          <div>Temp: {tonight.temperature}&#176;F</div>
          <div>Wind Speed: {tonight.windSpeed}</div>
          <div>Wind Direction: {tonight.windDirection}</div>
        </div>
      </>
    )
  } else {
    return (
      <></>
    )
  }
}

export default WeatherBreakdown;